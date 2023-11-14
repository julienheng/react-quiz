type Props = {
  dispatch: React.Dispatch<{ type: string }>;
  answer: number | null;
  index: number;
  numQuestions: number;
};

export default function NextButton({
  dispatch,
  answer,
  index,
  numQuestions,
}: Props) {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finished
      </button>
    );

  return <div />;
}
