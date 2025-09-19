import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuestionCard from "@/components/QuestionCard";
import { questions } from "@/data/questions";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const jkCareerGroups: Record<string, string[]> = {
  "Science & Tech": [
    "Doctor (MBBS/AYUSH)",
    "Nurse/Paramedic",
    "Engineer (Civil/Mechanical/CS)",
    "Research Scientist",
    "Biotechnologist",
    "Pharmacist",
    "Radiology Technician",
    "Lab Technician",
    "Software Developer",
    "Data Analyst",
    "Cybersecurity Analyst",
    "Environmental Scientist",
    "GIS Specialist",
  ],
  "Commerce & Management": [
    "Chartered Accountant (CA)",
    "Company Secretary (CS)",
    "Cost Accountant (CMA)",
    "Banking Professional",
    "Finance Analyst",
    "Entrepreneur/SME Owner",
    "Marketing Manager",
    "Business Analyst",
    "Logistics & Supply Chain",
    "Insurance Advisor",
  ],
  "Arts & Humanities": [
    "Civil Services (JKAS/UPSC)",
    "Teacher/Lecturer",
    "Lawyer/Advocate",
    "Journalist",
    "Psychologist/Counselor",
    "Social Worker",
    "Historian/Archivist",
    "Librarian",
    "Language Specialist",
  ],
  "Tourism & Hospitality": [
    "Hotel Manager",
    "Chef",
    "Tour Operator",
    "Travel Consultant",
    "Event Manager",
    "Adventure Tourism Guide",
    "Housekeeping Supervisor",
  ],
  "Agriculture & Allied": [
    "Agriculture Officer",
    "Horticulture Expert",
    "Floriculture Entrepreneur",
    "Sericulture Technician",
    "Fisheries & Aquaculture",
    "Food Technologist",
    "Dairy Technologist",
  ],
  "Vocational & Trades": [
    "Electrician",
    "Plumber",
    "Automobile Technician",
    "Welder/Fitter",
    "Carpenter",
    "Beauty & Wellness Professional",
    "Fashion Designer/Tailor",
    "Mobile Repair Technician",
  ],
  "Public Sector & Defense": [
    "JKSSB/State Govt Services",
    "JK Police",
    "Central Armed Forces",
    "Indian Army",
    "BSF/CRPF/ITBP",
    "Railways (RRB)",
    "Postal Services",
  ],
  "Creative & Media": [
    "Graphic Designer",
    "Photographer/Videographer",
    "Animator",
    "Filmmaker",
    "Content Creator",
    "Radio/TV Presenter",
    "Music & Performing Arts",
  ],
  Sports: ["Professional Athlete", "Coach/Trainer", "Sports Management", "Physical Education Teacher"],
};

const allCareerOptions = Object.entries(jkCareerGroups).flatMap(([group, careers]) =>
  careers.map((label) => ({ group, label }))
);

const groupToSubjects: Record<string, string[]> = {
  "Science & Tech": ["Physics", "Chemistry", "Mathematics", "Programming"],
  "Commerce & Management": ["Accountancy", "Commerce"],
  "Arts & Humanities": ["Arts & Humanities"],
  "Tourism & Hospitality": ["Tourism & Hospitality"],
  "Social Sciences": ["Social Sciences"],
  "Agriculture & Allied": ["Agriculture & Allied"],
  "Vocational & Trades": ["Vocational & Trades"],
  "Public Sector & Defense": ["Public Sector & Defense"],
  "Creative & Media": ["Creative & Media"],
  "Sports": ["Sports"],
};

const TakeTest = () => {
  const [interestQuery, setInterestQuery] = useState("");
  const [interestFields, setInterestFields] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("interestFields") || "[]");
    } catch {
      return [];
    }
  });

  const toggleInterest = (label: string) => {
    setInterestFields((prev) =>
      prev.includes(label) ? prev.filter((f) => f !== label) : [...prev, label]
    );
  };

  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const filteredOptions = useMemo(() => {
    const q = interestQuery.trim().toLowerCase();
    if (!q) return allCareerOptions;
    return allCareerOptions.filter(
      (o) => o.label.toLowerCase().includes(q) || o.group.toLowerCase().includes(q)
    );
  }, [interestQuery]);

  const relatedQuestions = useMemo(() => {
    if (interestFields.length === 0) return [];
    // Get all unique groups for selected careers
    const selectedGroups = new Set(
      allCareerOptions
        .filter(opt => interestFields.includes(opt.label))
        .map(opt => opt.group)
    );
    // Get all subjects for those groups
    const mappedSubjects = new Set<string>();
    selectedGroups.forEach(grp => {
      (groupToSubjects[grp] || []).forEach(subj => mappedSubjects.add(subj));
    });
    // If a group has no mapped subjects, try to use the group name as subject (for Arts & Humanities, etc.)
    selectedGroups.forEach(grp => {
      if ((groupToSubjects[grp] || []).length === 0) {
        mappedSubjects.add(grp);
      }
    });
    return questions.filter(q => mappedSubjects.has(q.subject));
  }, [interestFields]);

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleSubmitTest = () => {
    if (Object.keys(answers).length === 0) {
      toast({
        variant: "destructive",
        title: "No answers selected",
        description: "Please answer at least one question before submitting the test.",
      });
      return;
    }
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    if (interestFields.length) {
      localStorage.setItem("interestFields", JSON.stringify(interestFields));
    } else {
      localStorage.removeItem("interestFields");
    }
    navigate("/result");
  };

  return (
    <div className="container py-8 space-y-8">
      <Card className="relative overflow-hidden border-0 shadow-md bg-gradient-to-br from-sky-50 via-indigo-50 to-cyan-50 dark:from-sky-900/30 dark:via-indigo-900/30 dark:to-cyan-900/30">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(79,70,229,0.12),transparent_45%)]" />
        <CardHeader className="relative">
          <CardTitle className="text-lg">
            In which field would you like to pursue your career in the future?
          </CardTitle>
        </CardHeader>
        <CardContent className="relative space-y-5">
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground/90">
              Tell us what excites you the most (Select multiple)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Input
              placeholder="Search careers or fields (e.g., Doctor, Engineer, Tourism)…"
              value={interestQuery}
              onChange={(e) => setInterestQuery(e.target.value)}
              className="flex-1 bg-white/70 dark:bg-white/10 backdrop-blur border-white/60 dark:border-white/10"
            />
            {interestFields.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {interestFields.map((f) => (
                  <Badge key={f} variant="secondary" className="text-xs px-2.5 py-1 bg-white/70 dark:bg-white/10">
                    {f}
                  </Badge>
                ))}
              </div>
            )}
            {interestFields.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setInterestFields([])}
                className="text-foreground/70 hover:text-foreground"
              >
                Clear
              </Button>
            )}
          </div>
          <div className="rounded-xl border border-white/60 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
            <div className="p-3 pb-0 text-xs text-foreground/70">Suggestions (Select multiple)</div>
            <div className="relative p-3">
              <div className="hidden md:block pointer-events-none absolute inset-y-3 left-1/3 w-px bg-foreground/10"></div>
              <div className="hidden md:block pointer-events-none absolute inset-y-3 left-2/3 w-px bg-foreground/10"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredOptions.map((opt) => {
                  const active = interestFields.includes(opt.label);
                  return (
                    <button
                      key={opt.group + opt.label}
                      type="button"
                      onClick={() => toggleInterest(opt.label)}
                      className={`text-left rounded-lg px-3 py-3 transition-all border ${
                        active
                          ? "bg-primary/10 border-primary/40 ring-2 ring-primary/25 text-foreground"
                          : "bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 border-white/60 dark:border-white/10 text-foreground"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-medium text-sm leading-5">{opt.label}</span>
                        <span className="shrink-0 inline-flex items-center rounded-full border bg-blue-50 text-blue-700 border-blue-200 px-2 py-0.5 text-[10px] font-medium dark:bg-blue-500/15 dark:text-blue-200 dark:border-blue-400/30">
                          {opt.group}
                        </span>
                      </div>
                      {active && (
                        <div className="mt-2 text-[11px] text-primary font-medium">
                          Selected
                        </div>
                      )}
                    </button>
                  );
                })}
                {filteredOptions.length === 0 && (
                  <div className="col-span-full px-3 py-2 text-sm text-foreground/70">
                    No matches found.
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {relatedQuestions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q}
            selected={answers[q.id]}
            onSelect={(idx) => handleAnswerSelect(q.id, idx)}
          />
        ))}
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSubmitTest}>Submit Test</Button>
      </div>
    </div>
  );
};

export default TakeTest;
