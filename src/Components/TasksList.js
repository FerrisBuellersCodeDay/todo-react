import React from "react";
import Task from "./Task";
import classes from  "./Task.module.css";

const TasksList = (props) => {
  return (
    <ul className={classes["task-ul"]} >
      {props.items.map((task) => (
        <Task
          id= {task.id}
          text={task.text}
          isActive={props.isActive}
          deleteItem={props.onDeleteItem}
          editItem={props.onEditItem}
          checkItem={props.onCheckItem}
        />
      ))}
    </ul>
  );
};

export default TasksList;
