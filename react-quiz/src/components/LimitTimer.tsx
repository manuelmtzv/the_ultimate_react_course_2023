import { useEffect } from "react";
import { formatTime } from "@/helpers/formatTime";
import { useQuizContext } from "@/hooks/useQuizContext";

export default function LimitTimer() {
  const { quizContextDispatch, remainingTime } = useQuizContext();
  const time = remainingTime ?? 0;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      quizContextDispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(interval);
  }, [quizContextDispatch]);

  return <div className="timer">{formatTime(minutes, seconds)}</div>;
}
