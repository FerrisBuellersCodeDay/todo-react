import React, { useState } from "react";
import NewTask from "./Components/NewTask.js";
import ActiveTasksList from "./Components/ActiveTasksList.js";
import DoneTasksList from "./Components/DoneTasksList.js";

function App() {
  const [activeTasks, setActiveTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  console.log(activeTasks);
  console.log(doneTasks);

  let contentActive;
  let contentDone;

  const addNewTaskHandler = (enteredText) => {
    setActiveTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({id: Date.now(), text: enteredText });
      return updatedTasks;
    });
  };

  const deleteItemHandler = (deletedItemId) => {
    setActiveTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      return updatedTasks.filter(task=>task.id!==deletedItemId);
    });
  };

  const checkItemHandler = (checkedItemId) => {

    deleteItemHandler(checkedItemId);
    setDoneTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const b = activeTasks.find((task) => task.id === checkedItemId);
      updatedTasks.unshift(b);
      return updatedTasks;
      });
     
    

  };
  const editItemHandler = (checkedItem) => {
    
  };

  if (activeTasks.length > 0) {
    contentActive = (
      <ActiveTasksList className="active-list"
        items={activeTasks}
        onDeleteItem={deleteItemHandler}
        onCheckItem={checkItemHandler}
        onEditItem={editItemHandler}
      ></ActiveTasksList>
    );
  }
  if (doneTasks.length > 0) {
    contentDone = (
      <DoneTasksList
        items={doneTasks}
        onDeleteItem={deleteItemHandler}
        onCheckItem={checkItemHandler}
        onEditItem={editItemHandler}
      ></DoneTasksList>
    );
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <NewTask className="new-task" onAddTask={addNewTaskHandler} />
      {contentActive}
      {contentDone}
    </div>
  );
}

export default App;
