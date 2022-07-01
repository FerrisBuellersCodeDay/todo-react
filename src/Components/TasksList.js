import React from "react";
import Task from "./Task";

const TasksList = (props) => {
  return (
    <ul>
      {props.items.map((task) => (
        <Task
          id= {task.id}
          text={task.text}
          deleteItem={props.onDeleteItem}
          editItem={props.onEditItem}
          checkItem={props.onCheckItem}
        />
      ))}
    </ul>
  );
};

export default TasksList;
