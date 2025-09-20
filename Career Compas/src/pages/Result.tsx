import { useEffect, useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Trophy, Target, BookOpen, RotateCcw } from "lucide-react";
import { questions, subjects } from "@/data/questions";
import openai from "../lib/geminiClient"; // Gemini client

interface SubjectScore {
  subject: string;
  correct: number;
  total: number;
  percentage: number;
}

// Stream to career mapping
const streamCareers: Record<string, string[]> = {
  Science: [
    "Doctor / Medical Professional",
    "Engineer",
    "Research Scientist",
    "Biotechnologist",
    "Software Developer",
    "Pharmacist",
    "Data Analyst",
    "Environmental Scientist",
  ],
  Commerce: [
    "Chartered Accountant (CA)",
    "Company Secretary (CS)",
    "Banking & Finance Professional",
    "Business Analyst",
    "Marketing Manager",
    "Entrepreneur",
    "Investment Banker",
  ],
  "Arts & Humanities": [
    "Civil Services",
    "Teacher / Lecturer",
    "Lawyer",
    "Psychologist",
    "Journalist",
    "Social Worker",
    "Historian",
    "Linguist",
  ],
  Vocational: [
    "IT Support Specialist",
    "Electrician",
    "Chef / Hotel Manager",
    "Agricultural Entrepreneur",
    "Beautician",
    "Auto Mechanic",
    "Fashion Designer",
    "Mobile Repair Technician",
  ],
};

// Subject to stream mapping
const subjectToStream: Record<string, string> = {
  Physics: "Science",
  Chemistry: "Science",
  Biology: "Science",
  Mathematics: "Science",
  "Computer Science": "Science",
  Accountancy: "Commerce",
  "Business Studies": "Commerce",
  Economics: "Commerce",
  "Informatics Practices": "Commerce",
  History: "Arts & Humanities",
  "Political Science": "Arts & Humanities",
  Geography: "Arts & Humanities",
  Psychology: "Arts & Humanities",
  Sociology: "Arts & Humanities",
  Languages: "Arts & Humanities",
  "Arts & Humanities": "Arts & Humanities",
  "Tourism & Hospitality": "Vocational",
  "Social Sciences": "Arts & Humanities",
  "Agriculture & Allied": "Vocational",
  "Vocational & Trades": "Vocational",
  "Public Sector & Defense": "Vocational",
  "Creative & Media": "Vocational",
  Sports: "Vocational",
};

const Result = () => {
  const [scores, setScores] = useState<SubjectScore[]>([]);
  const [totalScore, setTotalScore] = useState({ correct: 0, total: 0, percentage: 0 });
  const [aiAdvice, setAiAdvice] = useState(""); // AI advice
  const [loadingAdvice, setLoadingAdvice] = useState(false); // Loading state
  const navigate = useNavigate();

  // Calculate scores from saved answers
  useEffect(() => {
    const savedAnswers = localStorage.getItem('quizAnswers');
    if (!savedAnswers) {
      navigate('/dashboard');
      return;
    }

    const answers = JSON.parse(savedAnswers) as Record<number, number>;

    const subjectScores: SubjectScore[] = [];
    let totalCorrect = 0;
    let totalAnswered = 0;

    subjects.forEach(subject => {
      const subjectQuestions = questions.filter(q => q.subject === subject);
      const answeredQuestions = subjectQuestions.filter(q => answers[q.id] !== undefined);
      const correctAnswers = answeredQuestions.filter(q => answers[q.id] === q.correctAnswer);

      if (answeredQuestions.length > 0) {
        const percentage = (correctAnswers.length / answeredQuestions.length) * 100;
        subjectScores.push({
          subject,
          correct: correctAnswers.length,
          total: answeredQuestions.length,
          percentage: Math.round(percentage)
        });
        totalCorrect += correctAnswers.length;
        totalAnswered += answeredQuestions.length;
      }
    });

    setScores(subjectScores);
    setTotalScore({
      correct: totalCorrect,
      total: totalAnswered,
      percentage: totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0
    });
  }, [navigate]);

  // Determine performance level
  const getPerformanceLevel = (percentage: number) => {
    if (percentage >= 80) return { level: "Excellent", color: "text-green-600", bgColor: "bg-green-100" };
    if (percentage >= 60) return { level: "Good", color: "text-blue-600", bgColor: "bg-blue-100" };
    if (percentage >= 40) return { level: "Average", color: "text-yellow-600", bgColor: "bg-yellow-100" };
    return { level: "Needs Improvement", color: "text-red-600", bgColor: "bg-red-100" };
  };
  const overallPerformance = getPerformanceLevel(totalScore.percentage);

  // Read interested field from localStorage
  const interestField = useMemo(() => {
    try {
      return localStorage.getItem("interestField");
    } catch {
      return null;
    }
  }, []);

  // Calculate recommended streams & careers
  const { recommendedStreams, recommendedCareers } = useMemo(() => {
    const streamScores: Record<string, { correct: number; total: number }> = {};
    scores.forEach((score) => {
      const stream = subjectToStream[score.subject];
      if (!stream) return;
      if (!streamScores[stream]) streamScores[stream] = { correct: 0, total: 0 };
      streamScores[stream].correct += score.correct;
      streamScores[stream].total += score.total;
    });

    const streamPercentages = Object.entries(streamScores).map(([stream, { correct, total }]) => ({
      stream,
      correct,
      total,
      percentage: total > 0 ? (correct / total) * 100 : 0,
    }));

    const max = streamPercentages.reduce((acc, cur) => Math.max(acc, cur.percentage), 0);
    const topStreams = max === 0
      ? streamPercentages.map(s => s.stream)
      : streamPercentages.filter(s => s.percentage === max).map(s => s.stream);

    let careers: string[] = [];
    topStreams.forEach(stream => {
      if (streamCareers[stream]) careers = careers.concat(streamCareers[stream]);
    });

    return {
      recommendedStreams: streamPercentages.sort((a, b) => b.percentage - a.percentage).slice(0, 3),
      recommendedCareers: careers,
    };
  }, [scores]);

  // Fetch AI career advice
  useEffect(() => {
    if (scores.length === 0) return;

    const fetchAdvice = async () => {
      setLoadingAdvice(true);
      try {
        const prompt = `A student completed a career aptitude test with these subject scores: ${JSON.stringify(scores)}.
Overall score: ${totalScore.percentage}%.
Top recommended streams: ${recommendedStreams.map(s => s.stream).join(", ")}.
Provide personalized career advice and recommended careers based on these results.`;

        const model = openai.getGenerativeModel({ model: "gemini-1.5-flash" });
        const chat = model.startChat({ history: [], generationConfig: { maxOutputTokens: 500 } });
        const response = await chat.sendMessage(prompt);
        setAiAdvice(response.response?.text() || "Sorry, AI could not provide advice.");
      } catch (err) {
        console.error(err);
        setAiAdvice("Sorry, AI could not provide advice.");
      }
      setLoadingAdvice(false);
    };

    fetchAdvice();
  }, [scores, totalScore, recommendedStreams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate('/dashboard')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Your Assessment Results
                </h1>
                <p className="text-sm text-muted-foreground">
                  "Knowledge is the key to unlocking your potential"
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Recommended Streams & Careers */}
        {recommendedStreams.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Top Recommended Streams for You</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-2">
                {recommendedStreams.map((rec) => (
                  <Badge key={rec.stream} className="text-base px-4 py-2 bg-primary/10 text-primary border-primary/30">
                    {rec.stream} ({Math.round(rec.percentage)}%)
                  </Badge>
                ))}
              </div>
              {recommendedCareers.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Recommended Career Options:</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    {recommendedCareers.map((career) => (
                      <li key={career}>{career}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Interested Field */}
        {interestField && (
          <Card className="mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Interested Field</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="text-base px-3 py-1">{interestField}</Badge>
            </CardContent>
          </Card>
        )}

        {/* Overall Score Card */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Trophy className="h-8 w-8 text-yellow-500" />
              Overall Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {totalScore.correct}/{totalScore.total}
                </div>
                <p className="text-muted-foreground">Questions Correct</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">
                  {totalScore.percentage}%
                </div>
                <p className="text-muted-foreground">Overall Score</p>
              </div>
              <div className="text-center">
                <Badge 
                  className={`text-lg px-4 py-2 ${overallPerformance.bgColor} ${overallPerformance.color} border-none`}
                >
                  {overallPerformance.level}
                </Badge>
                <p className="text-muted-foreground mt-2">Performance Level</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm text-muted-foreground">{totalScore.percentage}%</span>
              </div>
              <Progress value={totalScore.percentage} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Subject-wise Scores */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6" />
            Subject-wise Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scores.map((score) => {
              const performance = getPerformanceLevel(score.percentage);
              return (
                <Card key={score.subject} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span>{score.subject}</span>
                      <BookOpen className="h-5 w-5 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">
                          {score.correct}/{score.total}
                        </span>
                        <Badge className={`${performance.bgColor} ${performance.color} border-none`}>
                          {score.percentage}%
                        </Badge>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-muted-foreground">Score</span>
                          <span className="text-xs text-muted-foreground">{score.percentage}%</span>
                        </div>
                        <Progress value={score.percentage} className="h-2" />
                      </div>
                      <div className="text-center">
                        <Badge variant="outline" className="text-xs">
                          {performance.level}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* AI Career Advice */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>AI Career Advice</CardTitle>
          </CardHeader>
          <CardContent>
            {loadingAdvice ? (
              <p>Loading advice...</p>
            ) : (
              <div className="bg-muted/20 p-4 rounded">{aiAdvice}</div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => {
              localStorage.removeItem('quizAnswers');
              navigate('/dashboard');
            }}
            size="lg"
            className="px-8"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Retake Assessment
          </Button>
          <Button variant="outline" size="lg" className="px-8" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Result;
