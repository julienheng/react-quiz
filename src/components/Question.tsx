import Options from "./Options";

type Props = {
  question: {
    question: string;
    options: string[];
    correctOption: number;
    answer: string;
  };
  dispatch: React.Dispatch<{ type: string }>;
  answer: number | null;
};

export default function Question({ question, dispatch, answer }: Props) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
