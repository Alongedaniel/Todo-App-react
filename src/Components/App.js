import React, { useState, useEffect } from "react";
import Hello from "./Hello";
import Input from "./TaskInput";
import Tasks from "./Tasks";
import "../Styles/global.css";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("submitTask")) || [];
  const [inputText, setInputText] = useState("");
  const [submitTask, setSubmitTask] = useState(initialState);
  const [taskIsSubmitted, setTaskIsSubmitted] = useState(false);
  const [inputTask, setInputTask] = useState("");

  useEffect(() => {
    localStorage.setItem("submitTask", JSON.stringify(submitTask));
  }, [submitTask]);

  const pageContainer = {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#171B34",
  };

  const btn = {
    backgroundColor: "#E28435",
    borderRadius: ".5rem",
    border: "none",
    outline: "none",
    padding: ".5rem",
    color: "#fff",
  };

  const todoContainer = {
    height: "70vh",
    width: "40vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#575B75",
    borderRadius: "2rem",
    padding: "1rem 0",
    boxShadow: "10px 10px 5px #31354F",
  };

  return (
    <div style={pageContainer}>
      <div style={todoContainer}>
        <Hello />
        <Input
          inputText={inputText}
          setInputText={setInputText}
          submitTask={submitTask}
          setSubmitTask={setSubmitTask}
          setTaskIsSubmitted={setTaskIsSubmitted}
          taskIsSubmitted={taskIsSubmitted}
          btn={btn}
          setInputTask={setInputTask}
        />
        <p>{inputTask}</p>
        <Tasks
          setSubmitTask={setSubmitTask}
          submitTask={submitTask}
          btn={btn}
        />
      </div>
    </div>
  );
};

export default App;
