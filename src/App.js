import React, {useState} from 'react';
import NewTask from './Components/NewTask.js';
import ActiveTasks from './Components/ActiveTasks.js';
function App() {
  const [tasks, setTasks] =useState ([]);
  const addNewTaskHandler = enteredText => {
  setTasks(prevTasks=> {
    const newTasks = [...prevTasks];
    newTasks.unshift(enteredText);
    return ;

  });


  }


  return (
    <div className="Todo-list">
      <h1>ToDo List</h1>
      <NewTask onAddTask={addNewTaskHandler}/>
      <ActiveTasks className="ActiveTasks"/>
      <div className="DoneTasks"></div>
    </div>
  );
}

export default App;
