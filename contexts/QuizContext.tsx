/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useReducer, useEffect } from "react";

interface State {
  questions: {
    question: string;
    options: string[];
    correctOption: number;
    answer: string;
    points: number;
  }[];
  status: string;
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number | null;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

// questions,
// status,
// index,
// answer,
// points,
// highscore,
// secondsRemaining,
// numQuestions,
// maxPossiblePoints,
// dispatch,


const QuizContext = createContext([] as any);

const SECS_PER_QUESTIONS = 5;

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTIONS,
      };
      const question = state.questions[state.index];

      if (!question) {
        throw new Error("Question not found");
      }

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finished":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        status: "ready",
        questions: state.points,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: (state.secondsRemaining as number) - 1,
        status: state.secondsRemaining === 0 ? "nextQuestion" : state.status,
      };
    default:
      throw new Error("Action type not found");
      throw new (Error as any)("Action type not found");
  }
};

type Props = {
  children: React.ReactNode;
};

const QuizProvider = ({ children }: Props) => {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints =
    numQuestions > 0
      ? questions.reduce((prev: number, cur: any) => prev + cur.points, 0)
      : 0;

  useEffect(function () {
    fetch(`http://localhost:9000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        numQuestions,
        maxPossiblePoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { useQuiz, QuizProvider };
