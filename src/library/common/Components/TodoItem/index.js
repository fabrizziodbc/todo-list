import React from "react";
import "./todoItem.css";

const TodoItem = (props) => {
  return (
    <li className="todoItem">
      <input
        className="todoItem__checkbox"
        type="checkbox"
        onChange={props.onComplete}
        id={props.text}
      ></input>
      <p
        className={`todoItem__task ${props.completed && "task-done"}`}
        onClick={props.onComplete}
      >
        {props.text}
      </p>
      <span className="todoItem__close" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
};

export { TodoItem };
