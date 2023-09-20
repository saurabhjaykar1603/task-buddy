import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [taskList, setTaskList] = useState([
    { id: 1, 
      title: "Task 1",
      description: "description 1 ",
      priority: "high",
     },
     { id: 1, 
      title: "Task 1",
      description: "description 1 ",
      priority: "high",
     },
     { id: 1, 
      title: "Task 1",
      description: "description 1 ",
      priority: "high",
     }
    ]
    );
  return (
    <>
      <div className="container">
        <h1 className="app-title">Task Buddy</h1>
      </div>
      <div className="todo-flex-container">
        <div>
          <h1 className="text-center">Show List</h1>
        </div>

        <div>
          <h1 className="text-center">Add List</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
