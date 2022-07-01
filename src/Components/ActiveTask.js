import React from "react";
import './ActiveTask.css'
const ActiveTask = (props) => {
    
  const deleteItemHandler = () => {
    props.deleteItem(props.id);
  };

  const checkItemHandler = (event) => {
    event.preventDefault();
    props.checkItem(props.id);
  };

  const editItemHandler = () => {
    // props.editItem(props.id);
  };

  return (
    <li className="active-task-item">
      <input type="checkbox" onClick={checkItemHandler} />
      <div>{props.text}</div>
      <input type="button" value="Edit" onClick={editItemHandler} />
      <input type="button" value="Delete" onClick={deleteItemHandler} />
    </li>
  );
};

export default ActiveTask;
