type Props = {
  question: {
    question: string;
    options: string[];
    answer: string;
  };
};

export default function Options({ question }: Props) {
  return (
    <div>
      {question.options.map((option) => (
        <button key={option} className="btn btn-option">
          {option}
        </button>
      ))}
    </div>
  );
}
