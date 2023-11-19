import { useEffect } from "react";
import { useQuiz } from "../../contexts/QuizContext";


export default function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const mins = Math.floor((secondsRemaining as number) / 60);
  const seconds = (secondsRemaining as number) % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
