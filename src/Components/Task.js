import React, { useState, useRef, useEffect } from "react";
import classes from  "./Task.module.css";
import TextareaAutosize from 'react-textarea-autosize';



const Task = (props) => {
  const [inputReadOnly, setInputReadonly] = useState("true");
  const [inputValue, setInputValue] = useState(""); //set



  useEffect(() => {
    setInputValue(props.text);
    console.log(refInput.scrollHeight);
  }, [props.text]);

  const refInput = useRef(null);



  const deleteItemHandler = () => {
    props.deleteItem(props.id, props.isActive);
  };

  const checkItemHandler = (event) => {
    event.preventDefault();
    props.checkItem(props.id, props.isActive);
  };

  const editItemHandler = () => {
    const cursorPos = refInput.current.defaultValue.length;
    setInputReadonly(() => {
      return undefined;
    });
    refInput.current.setSelectionRange(cursorPos, cursorPos);
    refInput.current.focus();
  };

  const endEditItemHandler = () => {
    if (!inputReadOnly) {
      setInputReadonly("true");
      props.editItem(props.id, inputValue, props.isActive);
    }
  };

  const endEditWithEnterItemHandler = (event) => {
    if (event.key === "Enter" && !inputReadOnly) {
      event.target.blur();
    }
  };

  const taskInputChangeHandler = (event) => {
    //onChange Handler
    setInputValue(event.target.value);
  };

  /*

  */

  return (
    <li className={classes["task-li"]}>
      <input type="checkbox" onClick={checkItemHandler} className={classes["task-check"]} 
     checked= {!props.isActive}
      />
      <TextareaAutosize
        className={[classes.task, !props.isActive?classes.done:""].join(" ")}
      
        ref={refInput}
        type="text"
        value={inputValue}
        readOnly={inputReadOnly}
        onChange={taskInputChangeHandler}
        onBlur={endEditItemHandler}
        onKeyDown={endEditWithEnterItemHandler}
      ></TextareaAutosize>

      <input type="button" value="✎" onClick={editItemHandler} className={classes["task-button"]} />
      <input type="button" value="X" onClick={deleteItemHandler} className={classes["task-button"]}/>
        
    </li>
  );
};

export default Task;
