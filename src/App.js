import React, { useState, useEffect } from "react";
import NewTask from "./Components/NewTask.js";
import TasksList from "./Components/TasksList.js";
import classes from "./App.module.css";

const App = () => {
  const activeTasksDefault =
    JSON.parse(localStorage.getItem("activeTasks")) || [];
  const doneTasksDefault = JSON.parse(localStorage.getItem("doneTasks")) || [];

  const [activeTasks, setActiveTasks] = useState(activeTasksDefault);
  const [doneTasks, setDoneTasks] = useState(doneTasksDefault);

  useEffect(() => {
    localStorage.setItem("activeTasks", JSON.stringify(activeTasks));
  }, [activeTasks]);
  useEffect(() => {
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
  }, [doneTasks]);

  let contentActive = (
    <div >
      <h2 className={classes["active-task-label"]}>No active tasks yet</h2>
    </div>
  );
  let contentDone;

  const addNewTaskHandler = (enteredText) => {
    setActiveTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ id: Date.now(), text: enteredText });
      return updatedTasks;
    });
    localStorage.setItem("activeTasks", JSON.stringify(activeTasks));
  };

  const editItemHandler = (checkedItemId, newTaskValue, isActive) => {
    const setTaskListRef = isActive ? setActiveTasks : setDoneTasks;
    setTaskListRef((prevTasks) => {
      const updatedTasks = [...prevTasks];

      updatedTasks[
        updatedTasks.findIndex((task) => task.id === checkedItemId)
      ].text = newTaskValue;
      return updatedTasks;
    });
  };

  const deleteTaskHandler = (deletedItemId, isActive) => {
    const setTaskListRef = isActive ? setActiveTasks : setDoneTasks;
    setTaskListRef((prevTasks) => {
      const updatedTasks = [...prevTasks];
      return updatedTasks.filter((task) => task.id !== deletedItemId);
    });
  };

  const checkTaskHandler = (checkedItemId, isActive) => {
    const setTaskListRef = isActive ? setDoneTasks : setActiveTasks;
    const setTaskArrayRef = isActive ? activeTasks : doneTasks;

    deleteTaskHandler(checkedItemId, isActive);

    setTaskListRef((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const b = setTaskArrayRef.find((task) => task.id === checkedItemId);
      updatedTasks.unshift(b);
      return updatedTasks;
    });
  };

  if (activeTasks.length > 0) {
    contentActive = (
      <div >
        
        <TasksList className={classes["task-list"]}
          className="active-list"
          isActive={true}
          items={activeTasks}
          onDeleteItem={deleteTaskHandler}
          onCheckItem={checkTaskHandler}
          onEditItem={editItemHandler}
        ></TasksList>
      </div>
    );
  }
  if (doneTasks.length > 0) {
    contentDone = (
      <div >
        
        <TasksList  className={classes["task-list"]}
          className="done-list"
          isActive={false}
          items={doneTasks}
          onDeleteItem={deleteTaskHandler}
          onCheckItem={checkTaskHandler}
          onEditItem={editItemHandler}
        ></TasksList>
      </div>
    );
  }

  return (
    <div className={classes.todo}>
      <h1 className={classes["todo-label"]}>ToDo List</h1>
      <NewTask  className={[classes.card, classes["todo-new"]].join(" ")} onAddTask={addNewTaskHandler} />
      <div className={classes.card}>
      {contentActive}
      {contentDone}
      </div>
    </div>
  );
};

export default App;
