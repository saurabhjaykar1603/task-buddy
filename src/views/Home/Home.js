import React, { useState } from "react";
import "./Home.css";
import Task from "../../components/Task/Task";

function Home() {
  const [taskList, setTaskList] = useState([
    { id: 1, title: "Task 1", description: "description 1 ", priority: "high" },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

// add task btn 
const addTaskToLink = () => {
const randomId = Math.floor(Math.random() *1000);

  const obj = {
    id:randomId,
    title : title,
    description : description,
    priority : priority
 
}
setTaskList([...taskList, obj]);
setTitle ("")
setDescription("")
setPriority("")
}

  return (
    <>
      <div className="container">
        <h1 className="app-title">🎯 Task Buddy 🎯</h1>
      </div>
      <div className="todo-flex-container">
        <div>
          <h1 className="text-center">Show List</h1>
          {taskList.map((taskItem, index) => {
            const { id, title, description, priority } = taskItem;

            return (
              <Task
                id={id}
                title={title}
                description={description}
                priority={priority}
              />
            );
          })}
        </div>

        <div>
          <h1 className="text-center">Add List</h1>
          <div className="add-task-container">
            <form action="">
             
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Task Here"
                className="task-input"
              />
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description  Here"
                className="task-input"
              />
              <input
                type="text"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                placeholder="Enter Priority Here"
                className="task-input"
              />
              <button type="button" className="btn-add-task" onClick={addTaskToLink}>Add Task to List</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
