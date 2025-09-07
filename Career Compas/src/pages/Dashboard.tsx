import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import QuestionCard from "@/components/QuestionCard";
import CollegeSidebar from "@/components/CollegeSidebar";
import { questions, subjects } from "@/data/questions";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, BookOpen } from "lucide-react";

const subjectColors: Record<string, string> = {
  Physics: "bg-blue-500",
  Mathematics: "bg-green-500",
  Chemistry: "bg-yellow-500",
  Programming: "bg-purple-500",
  Accountancy: "bg-pink-500",
  Commerce: "bg-teal-500",
};

const Dashboard = () => {
  const username = null; // Replace with dynamic username as needed

  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const handleShowResult = () => {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount === 0) {
      toast({
        variant: "destructive",
        title: "No answers selected",
        description: "Please answer at least one question before viewing results.",
      });
      return;
    }

    localStorage.setItem("quizAnswers", JSON.stringify(answers));

    toast({
      title: "Quiz completed!",
      description: `You answered ${answeredCount} out of ${questions.length} questions.`,
    });

    navigate("/result");
  };

  const answeredCount = Object.keys(answers).length;
  const progressPercentage = (answeredCount / questions.length) * 100;

  return (
    <>
      <div className="container mx-auto p-4">
        {/* Subject Progress Section */}
        <div className="mb-6">
          <div className="font-semibold text-lg mb-4 flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span>Assessment Questions Progress</span>
          </div>
          <div className="flex flex-wrap gap-6">
            {subjects.map((subject) => {
              const subjectQuestions = questions.filter((q) => q.subject === subject);
              const answeredInSubject = subjectQuestions.filter(
                (q) => answers[q.id] !== undefined
              ).length;
              const percentage = Math.round((answeredInSubject / subjectQuestions.length) * 100);

              return (
                <div key={subject} className="w-48 bg-white shadow rounded-lg p-4 border border-muted">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">{subject}</span>
                    {percentage === 100 ? (
<CheckCircle2 className="text-green-500 h-5 w-5" aria-label="Complete" />

                    ) : (
                      <span className="text-sm text-muted-foreground">{`${answeredInSubject}/${subjectQuestions.length}`}</span>
                    )}
                  </div>
                  <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`${subjectColors[subject]} h-full`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-600 text-right mt-1">{percentage}%</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Question List */}
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            selectedAnswer={answers[question.id] ?? null}
            onAnswerSelect={handleAnswerSelect}
          />
        ))}

        {/* Show Result Button */}
        <div className="mt-6">
          <Button onClick={handleShowResult} size="lg" className="w-full sm:w-auto">
            Show Result ({answeredCount}/{questions.length})
          </Button>
        </div>

       
        </div>
    
    </>
  );
};

export default Dashboard;
