import React from "react";
import "./Task.css";
import deletTaskImg from "./images/delete.png";

const Task = ({
  id,
  title,
  description,
  priority,
  removeTaskFromList,
  setTaskEditable,
}) => {
  return (
    <>
      <div className="task-container">
        <h2 className="task-title">{title}</h2>
        <p className=" task-description ">{description}</p>
        <span className="task-priority">🎯 {priority}</span>
        <img
          src={deletTaskImg}
          alt="Delet task"
          className="task-delet-icon"
          onClick={() => {
            removeTaskFromList(id);
          }}
        />
        <span
          className="task-edit-icon"
          onClick={() => {
            setTaskEditable(id);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </span>
      </div>
    </>
  );
};

export default Task;
