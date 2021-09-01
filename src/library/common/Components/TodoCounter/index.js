import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

const TodoCounter = () => {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className="todoCounter">
      Has completado {completedTodos} de {totalTodos} TODO's
    </h2>
  );
};
export { TodoCounter };
