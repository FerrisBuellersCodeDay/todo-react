import React, { useState, useRef } from "react";
import classes from './NewTask.module.css'

const NewTask = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const refInput = useRef(null);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputValue.length > 0) {
      setIsValid(true);
      setEnteredValue(inputValue);
      props.onAddTask(inputValue);
      setInputValue('');
      return;
    }
    setIsValid(false);
  };

  const taskInputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <form onSubmit={formSubmitHandler} className={classes['new-task']}>
      <input ref={refInput} type="text" className={classes['new-task-text']} value ={inputValue} onChange = {taskInputChangeHandler}></input>
      <button type="submit" className={classes['new-task-button']}>+</button>
    </form>
  );
};

export default NewTask;
