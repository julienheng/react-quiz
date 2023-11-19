/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import { useEffect, useReducer } from "react";

// COMPONENTS
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { useQuiz } from "../contexts/QuizContext";

// interface State {
//   questions: {
//     question: string;
//     options: string[];
//     correctOption: number;
//     answer: string;
//     points: number;
//   }[];
//   status: string;
//   index: number;
//   answer: number | null;
//   points: number;
//   highscore: number;
//   secondsRemaining: number | null;
// }

// interface Action {
//   type: string;
//   payload?: any;
// }

// const initialState = {
//   questions: [],
//   status: "loading",
//   index: 0,
//   answer: null,
//   points: 0,
//   highscore: 0,
//   secondsRemaining: null,
// };

// const SECS_PER_QUESTION = 5;

// const reducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case "dataReceived":
//       return { ...state, questions: action.payload, status: "ready" };
//     case "dataFailed":
//       return { ...state, status: "error" };
//     case "start":
//       return {
//         ...state,
//         status: "active",
//         secondsRemaining: state.questions.length * SECS_PER_QUESTION,
//       };
//     case "newAnswer":
//       const question = state.questions.at(state.index);

//       if (!question) {
//         throw new (Error as any)("Question not found");
//       }

//       return {
//         ...state,
//         answer: action.payload,
//         points:
//           action.payload === question.correctOption
//             ? state.points + question.points
//             : state.points,
//       };
//     case "nextQuestion":
//       return {
//         ...state,
//         index: state.index + 1,
//         answer: null,
//       };
//     case "finished":
//       return {
//         ...state,
//         status: "finished",
//         highscore:
//           state.points > state.highscore ? state.points : state.highscore,
//       };
//     case "restart":
//       return {
//         ...initialState,
//         status: "ready",
//         questions: state.points,
//       };
//     case "tick":
//       return {
//         ...state,
//         secondsRemaining: (state.secondsRemaining as number) - 1,
//         status: state.secondsRemaining === 0 ? "nextQuestion" : state.status,
//       };
//     default:
//       throw new (Error as any)("Action type not found");
//   }
// };

function App() {

  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen />
        )}
        {status === "active" && (
          <>
            <Progress/>
            <Question/>
            <Footer>
              <>
                <Timer/>
                <NextButton/>
              </>
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen/>
        )}
      </Main>
    </div>
  );
}

export default App;
