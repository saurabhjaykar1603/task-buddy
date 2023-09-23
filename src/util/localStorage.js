export const saveTaskTolocalStorage = (tasks) => {
  localStorage.setItem("taskbuddy", JSON.stringify(tasks));
};

// Save Task to Local Storage
