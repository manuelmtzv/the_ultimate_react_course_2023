import { useQuizContext } from "@/hooks/useQuizContext";

export default function FinishScreen() {
  const { points, maxPoints, hightScore } = useQuizContext();
  const percentage = Math.ceil((points / maxPoints) * 100);

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} points! (
        {percentage}%)
      </p>

      <p className="highscore">(Hightscore: {hightScore} points)</p>
    </>
  );
}
