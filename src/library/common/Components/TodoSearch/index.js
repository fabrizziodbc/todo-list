import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

const TodoSearch = () => {
  const textSearch = (event) => {
    setSearchValue(event.target.value);
  };
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <div className="todoSearch-container">
      <input
        className="todoSearch"
        placeholder="Buscar tarea"
        value={searchValue}
        onChange={textSearch}
      />
    </div>
  );
};
export { TodoSearch };
