import React, { useState, useRef } from "react";

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
      return;
    }
    setIsValid(false);
  };

  const taskInputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <form onSubmit={formSubmitHandler}>
      <input ref={refInput} type="text" value ={inputValue} onChange = {taskInputChangeHandler}></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTask;
