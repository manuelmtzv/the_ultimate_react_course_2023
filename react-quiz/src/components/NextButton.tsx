import { useQuizContext } from "@/hooks/useQuizContext";

export default function NextButton() {
  const { index, questionAmount, answer, quizContextDispatch } =
    useQuizContext();

  function nextQuestionHandler() {
    quizContextDispatch({ type: "nextQuestion" });
  }

  function finishHandler() {
    quizContextDispatch({ type: "finish" });
  }

  if (answer === undefined) return null;

  if (index < questionAmount - 1)
    return (
      <button className="btn btn-ui" onClick={nextQuestionHandler}>
        Next
      </button>
    );

  if (index === questionAmount - 1)
    return (
      <button className="btn btn-ui" onClick={finishHandler}>
        Finish
      </button>
    );
}
