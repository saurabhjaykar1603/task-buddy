import React, { useEffect, useState } from "react";
import "./Home.css";
import Task from "../../components/Task/Task";
import showToast from "crunchy-toast";
import { saveTaskTolocalStorage } from "./../../util/localStorage";

function Home() {
  const [taskList, setTaskList] = useState([
    { id: 1, title: "Task 1", description: "description 1 ", priority: "high" },
  ]);

  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  // clear input all
  const clearInputFields = () => {
    setTitle("");
    setDescription("");
    setPriority("");
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("taskbuddy"));
    if (list && list.length >= 0) {
      setTaskList(list);
    }
  }, []);

  // find task by id func code
  const findTaskIndexById = (taskId) => {
    let index;
    taskList.forEach((task, i) => {
      if (task.id === taskId) {
        index = i;
      }
    });
    return index;
  };

  // Save Task to Local Storage  // send code to util/localStorage.js

  // add task btn
  const addTaskToLink = () => {
    const randomId = Math.floor(Math.random() * 1000);

    const obj = {
      id: randomId,
      title: title,
      description: description,
      priority: priority,
    };
    const newTaskList = [...taskList, obj];

    setTaskList(newTaskList);

    clearInputFields();

    setTaskList([...taskList, obj]);

    saveTaskTolocalStorage(newTaskList);

    // crunchy-tost lab
    showToast("Task Added Succesfully", "success", 3000);
  };

  // Delete Task Button
  const removeTaskFromList = (id) => {
    const index = findTaskIndexById(id); // to find task id
    const tempArray = taskList;
    tempArray.splice(index, 1);

    setTaskList([...tempArray]);
    saveTaskTolocalStorage(tempArray);

    // crunchy-toast
    showToast("Task Deleted successfully !", "error", 2000);
  };

  // Edit/Update Task Button

  const setTaskEditable = (id) => {
    setIsEdit(true);
    setId(id);

    const index = findTaskIndexById(id);

    const currentEditTask = taskList[index]; // to find task id

    // set tASK TO EDIT/update
    setTitle(currentEditTask.title);
    setDescription(currentEditTask.description);
    setPriority(currentEditTask.priority);
  };

  const updateTask = (task) => {
    const indexToUpdate = findTaskIndexById(id); // to find task id

    const tempArray = taskList;
    tempArray[indexToUpdate] = {
      id: id,
      title: title,
      description: description,
      priority: priority,
    };

    setTaskList([...tempArray]);

    saveTaskTolocalStorage(tempArray);

    clearInputFields();
    setIsEdit(false);

    // crunchy-toast
    showToast("Task Updated successfully !", "info", 3000);
  };

  return (
    <>
      <div className="container">
        <h1 className="app-title">🎯 Task Buddy 🎯</h1>
      </div>

      <div className="todo-flex-container">
        <div>
          <h1 className="text-center">
            Show List <i className="fa-solid fa-list"></i>
          </h1>
          <div className="task-main-container">
            {" "}
            {taskList.map((taskItem, index) => {
              const { id, title, description, priority } = taskItem;

              return (
                <Task
                  id={id}
                  title={title}
                  description={description}
                  priority={priority}
                  key={index}
                  removeTaskFromList={removeTaskFromList}
                  object={taskItem}
                  setTaskEditable={setTaskEditable}
                />
              );
            })}
          </div>
        </div>

        <div>
          <h1 className="text-center">
            {isEdit ? `Update Task ${id}` : "Add Task"}
          </h1>
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

              <div className="btn-container">
                <button
                  type="button"
                  className="btn-add-task"
                  onClick={() => {
                    isEdit ? updateTask() : addTaskToLink();
                  }}
                >
                  {isEdit ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
