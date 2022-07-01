import React, { useState, useRef } from "react";
import './Task.css'
const Task = (props) => {

  const [inputReadOnly, setInputReadonly] = useState("false");
  const refInput = useRef(null);

    
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
 /*
  const onChangeHandler = (event) => {
    this.setState({value: event.target.value})
  };
  */

  return (
    <li className="task-item">
      <input type="checkbox" onClick={checkItemHandler} />
      <input ref={refInput} type ="text" defaultValue = {props.text} readonly={inputReadOnly}></input>

      <input type="button" value="Edit" onClick={editItemHandler} />
      <input type="button" value="Delete" onClick={deleteItemHandler} />
    </li>
  );
};

export default Task;
