import React, { useState } from "react";
import NewTask from "./Components/NewTask.js";
import TasksList from "./Components/TasksList.js";
import  './App.css';

function App() {
  const [activeTasks, setActiveTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  console.log(activeTasks);
  console.log(doneTasks);

  let contentActive =  (  <div><h2>No active tasks yet</h2></div>);
  let contentDone;

  const addNewTaskHandler = (enteredText) => {
    setActiveTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ id: Date.now(), text: enteredText });
      return updatedTasks;
    });
  };

  const editItemHandler = (checkedItem) => {};

  const deleteActiveTaskHandler = (deletedItemId) => {
    setActiveTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      return updatedTasks.filter((task) => task.id !== deletedItemId);
    });
  };

  const checkActiveTaskHandler = (checkedItemId) => {
    deleteActiveTaskHandler(checkedItemId);
    setDoneTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const b = activeTasks.find((task) => task.id === checkedItemId);
      updatedTasks.unshift(b);
      return updatedTasks;
    });
  };

  const deleteDoneTaskHandler = (deletedItemId) => {
    setDoneTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      return updatedTasks.filter((task) => task.id !== deletedItemId);
    });
  };

  const checkDoneTaskHandler = (checkedItemId) => {
    deleteDoneTaskHandler(checkedItemId);
    setActiveTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const b = doneTasks.find((task) => task.id === checkedItemId);
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
        items={doneTasks}
         onDeleteItem={deleteDoneTaskHandler}
         onCheckItem={checkDoneTaskHandler}
        onEditItem={editItemHandler}
      ></TasksList>
            </div>

    );
  }

  return (
    <div className="todo">
      <h1 >ToDo List</h1>
      <NewTask className="new-task" onAddTask={addNewTaskHandler} />
      {contentActive}
      {contentDone}
    </div>
  );
}

export default App;
