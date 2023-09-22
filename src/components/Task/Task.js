import React from "react";
import "./Task.css";
import deletTaskImg from "./images/delete.png"

const Task = ({ id, title, description, priority, removeTaskFromList, obj}) => {
  return (
    <>
      <div className="task-container">
        <h2 className="task-title">{title}</h2>
        <p className=" task-description ">{description}</p>
        <span className="task-priority">🎯 {priority}</span>
        <img src={deletTaskImg} alt="Delet task"className="task-delet-icon" onClick={()=>{
          removeTaskFromList(obj)
          console.log(obj)
        }}/>

      </div>
    </>
  );
};

export default Task;
