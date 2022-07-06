import React, { useState } from "react";
import NewTask from "./Components/NewTask.js";
import TasksList from "./Components/TasksList.js";
import "./App.css";

function App() {
  const [activeTasks, setActiveTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  console.log(activeTasks);
  console.log(doneTasks);

  let contentActive = (
    <div>
      <h2>No active tasks yet</h2>
    </div>
  );
  let contentDone;

  const addNewTaskHandler = (enteredText) => {
    setActiveTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ id: Date.now(), text: enteredText });
      return updatedTasks;
    });
  };

  const editItemHandler = (checkedItemId, newTaskValue, isActive) => {
    const setTaskListRef = isActive ? setActiveTasks : setDoneTasks;
    setTaskListRef((prevTasks) => {
      const updatedTasks = [...prevTasks];

      updatedTasks[
        updatedTasks.findIndex((task) => task.id == checkedItemId)
      ].text = newTaskValue;
      return updatedTasks;
    });
  };

  const deleteActiveTaskHandler = (deletedItemId, isActive) => {
    const setTaskListRef = isActive ? setActiveTasks : setDoneTasks;
    setTaskListRef((prevTasks) => {
      const updatedTasks = [...prevTasks];
      return updatedTasks.filter((task) => task.id !== deletedItemId);
    });
  };

  const checkActiveTaskHandler = (checkedItemId, isActive) => {
    const setTaskListRef = isActive ? setDoneTasks : setActiveTasks;
    const setTaskArrayRef = isActive ? activeTasks : doneTasks;

    deleteActiveTaskHandler(checkedItemId, isActive);

    setTaskListRef((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const b = setTaskArrayRef.find((task) => task.id === checkedItemId);
      updatedTasks.unshift(b);
      return updatedTasks;
    });
  };

  
  if (activeTasks.length > 0) {
    contentActive = (
      <div>
        <h2>Active Tasks</h2>
        <TasksList
          className="active-list"
          isActive={true}
          items={activeTasks}
          onDeleteItem={deleteActiveTaskHandler}
          onCheckItem={checkActiveTaskHandler}
          onEditItem={editItemHandler}
        ></TasksList>
      </div>
    );
  }
  if (doneTasks.length > 0) {
    contentDone = (
      <div>
        <h2>Done Tasks</h2>
        <TasksList
          className="done-list"
          isActive={false}
          items={doneTasks}
          onDeleteItem={deleteActiveTaskHandler}
          onCheckItem={checkActiveTaskHandler}
          onEditItem={editItemHandler}
        ></TasksList>
      </div>
    );
  }

  return (
    <div className="todo">
      <h1>ToDo List</h1>
      <NewTask className="new-task" onAddTask={addNewTaskHandler} />
      {contentActive}
      {contentDone}
    </div>
  );
}

export default App;
