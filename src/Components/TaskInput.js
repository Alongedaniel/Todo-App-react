import React from "react";
import { v4 as uuidv4 } from "uuid";

const Input = (props) => {
  const handleInputText = (e) => {
    props.setInputText(e.target.value);
    props.setInputTask("");
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (props.inputText === "") {
      props.setInputTask("Add a task");
    } else {
      props.setSubmitTask([
        ...props.submitTask,
        { id: uuidv4(), title: props.inputText, completed: false },
      ]);
      props.setInputText("");
    }
  };

  const inputBox = {
    display: "flex",
    gap: ".5rem",
  };

  const input = {
    width: "30vw",
    border: "none",
    backgroundColor: "#31354F",
    padding: "1rem",
    borderRadius: "2rem",
    outline: "none",
    color: "#fff",
  };

  return (
    <div>
      <h1
        style={{
          color: "rgb(231, 233, 235)",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        To Do App
      </h1>
      <form style={inputBox}>
        <input
          style={input}
          value={props.inputText}
          type="text"
          placeholder="Input task here"
          onChange={handleInputText}
        />
        <button style={props.btn} type="submit" onClick={handleSubmitTask}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Input;
