import React from "react";
import ActiveTask from "./ActiveTask";

const ActiveTasksList = (props) => {
  return (
    <ul>
      {props.items.map((task) => (
        <ActiveTask
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

export default ActiveTasksList;
