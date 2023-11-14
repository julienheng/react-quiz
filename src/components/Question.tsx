import Options from "./Options";

type Props = {
  question: {
    question: string;
    options: string[];
    answer: string;
  };
};

export default function Question({ question }: Props) {
  
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question}  />
    </div>
  );
}
