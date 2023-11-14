type Props = {
  dispatch: React.Dispatch<{ type: string }>;
  answer: number | null;
};

export default function NextButton({ dispatch, answer }: Props) {
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}
