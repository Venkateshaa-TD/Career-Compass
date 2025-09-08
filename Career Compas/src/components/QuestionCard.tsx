import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/questions";

export interface QuestionCardProps {
  question: Question;
  selected?: number;
  onSelect: (answerIndex: number) => void;
}

const QuestionCard = ({ question, selected, onSelect }: QuestionCardProps) => {
  return (
    <Card className="relative overflow-hidden border-l-4 border-l-primary/40 hover:border-l-primary transition-colors shadow-sm hover:shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {/* Number chip with primary accent */}
            <span className="inline-flex items-center justify-center h-6 min-w-6 px-2 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              Question {question.id}
            </span>
            <CardTitle className="text-base font-semibold leading-6" />
          </div>

          {/* Subject badge with highlight */}
          <span className="inline-flex items-center rounded-full border bg-blue-50 text-blue-700 border-blue-200 px-2.5 py-1 text-xs font-medium">
            {question.subject}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm">{question.question}</p>

        {/* Options with stable font colors */}
        <div className="grid gap-2">
          {question.options.map((option, index) => {
            const isSelected = selected === index;
            return (
              <Button
                key={index}
                type="button"
                variant={isSelected ? "default" : "outline"}
                className={`group justify-start h-auto py-3 transition-all duration-150 ${
                  isSelected
                    ? "ring-2 ring-primary/40 shadow-sm bg-primary text-primary-foreground hover:bg-primary"
                    : "bg-muted/30 hover:bg-muted/50 text-foreground"
                }`}
                onClick={() => onSelect(index)}
              >
                <span
                  className={`mr-3 inline-flex h-7 w-7 items-center justify-center rounded-md border text-xs font-semibold transition-colors ${
                    isSelected
                      ? "bg-primary-foreground text-primary border-primary-foreground/30"
                      : "bg-background"
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </span>
                <span
                  className={`text-left ${
                    isSelected ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {option}
                </span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
