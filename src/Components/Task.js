import React, { useState, useRef, useEffect } from "react";
import "./Task.css";
const Task = (props) => {
  const [inputReadOnly, setInputReadonly] = useState("true");
  const [inputValue, setInputValue] = useState(""); //set

  useEffect(() => {
    setInputValue(props.text);
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
    <li className="task-item">
      <input type="checkbox" onClick={checkItemHandler} />
      <input
        ref={refInput}
        type="text"
        value={inputValue}
        readOnly={inputReadOnly}
        onChange={taskInputChangeHandler}
        onBlur={endEditItemHandler}
        onKeyDown={endEditWithEnterItemHandler}
      ></input>

      <input type="button" value="Edit" onClick={editItemHandler} />
      <input type="button" value="Delete" onClick={deleteItemHandler} />
    </li>
  );
};

export default Task;
