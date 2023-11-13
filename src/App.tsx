import "./App.css";
import { useEffect, useReducer } from "react";

// COMPONENTS
import Header from "./components/Header";
import Main from "./components/Main";

const initialState = {
  questions: [],

  // Loading, Error, Ready, Active, Finished
  status: "loading",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "DataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "DataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Action unknown");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch(`http://localhost:9000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "DataReceived", payload: data }))
      .catch((err) => dispatch({ type: "DataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
