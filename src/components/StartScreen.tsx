import React from "react";

type Props = {
  numQuestions: number;
  dispatch: React.Dispatch<{ type: string }>;
};

export default function StartScreen({ numQuestions, dispatch }: Props) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}
