type Props = {
  question: {
    question: string;
    options: string[];
    correctOption: number;
    answer: string | null;

  };
  dispatch: React.Dispatch<{ type: string; payload: number }>;
  answer: number | null;
};

export default function Options({ question, dispatch, answer }: Props) {
  const hasAnswered = answer !== null;

  return (
    <div>
      {question.options.map((option, index) => (
        <button
          key={option}
          disabled={hasAnswered}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
