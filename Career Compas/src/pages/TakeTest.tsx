import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuestionCard from "@/components/QuestionCard";
import { questions } from "@/data/questions";
import { useToast } from "@/hooks/use-toast";

const TakeTest = () => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
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
    navigate("/result");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Career Assessment Test</h1>
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          selectedAnswer={answers[question.id] ?? null}
          onAnswerSelect={handleAnswerSelect}
        />
      ))}
      <Button className="mt-6" size="lg" onClick={handleSubmitTest}>
        Submit Test
      </Button>
    </div>
  );
};

export default TakeTest;
