import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  const { toggleModal } = React.useContext(TodoContext);

  return (
    <div className="button-container">
      <button className="createTodoButton" onClick={toggleModal}>
        +
      </button>
    </div>
  );
};
export { CreateTodoButton };
