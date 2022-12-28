import React from "react";

const Tasks = (props) => {
  const handleDelete = ({ id }) => {
    props.setSubmitTask(props.submitTask.filter((task) => task.id !== id));
  };

  const todoList = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "1rem auto",
    padding: ".5rem .5rem .5rem 1rem",
    color: "white",
    borderRadius: "1rem",
    backgroundColor: "#171B34",
    boxShadow: "10px 10px 5px #31354F",
  };

  return (
    <div
      style={{
        width: "70%",
      }}
    >
      {props.submitTask.map((task) => (
        <div style={todoList} key={task.id}>
          <span style={{}}>{task.title}</span>
          <button style={props.btn} onClick={() => handleDelete(task)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default Tasks;
