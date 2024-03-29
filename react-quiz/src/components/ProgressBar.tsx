import { useQuizContext } from "@/hooks/useQuizContext";

export default function ProgressBar() {
  const { index, questionAmount, points, maxPoints, answer } = useQuizContext();
  const questionNumber = index + 1;
  const progress = index + Number(answer !== undefined);

  return (
    <header className="progress">
      <progress value={progress} max={questionAmount} />

      <p>
        Question: <strong>{questionNumber}</strong> / {questionAmount}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </header>
  );
}
