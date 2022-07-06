import React from "react";
import Task from "./Task";

const TasksList = (props) => {
  return (
    <ul>
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
