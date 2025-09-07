import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (questionId: number, answerIndex: number) => void;
}

const QuestionCard = ({ question, selectedAnswer, onAnswerSelect }: QuestionCardProps) => {
  return (
    <Card className="mb-4 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">
            {question.subject}
          </span>
          <span className="text-xs text-muted-foreground">
            Question {question.id}
          </span>
        </div>
        <CardTitle className="text-base font-medium leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid gap-2">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === index ? "default" : "outline"}
              className="justify-start h-auto p-3 text-left whitespace-normal"
              onClick={() => onAnswerSelect(question.id, index)}
            >
              <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;