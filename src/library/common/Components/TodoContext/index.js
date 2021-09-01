import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();
const prueba = [1, 2, 3];
function TodoProvider(props) {
  const { todos, saveTodos, loading } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [modal, setModal] = React.useState(false);
  const totalTodos = todos.length;
  const completedTodos = todos.filter((t) => t.completed === true).length;

  let todoSearchbox = [];
  if (!searchValue >= 1) {
    todoSearchbox = todos;
  } else {
    todoSearchbox = todos.filter((t) => {
      const searchLower = searchValue.toLowerCase();
      const todosLower = t.text.toLowerCase();
      return todosLower.includes(searchLower);
    });
  }

  const toggleModal = () => {
    setModal(!modal);
  };
  const submitTask = (text) => {
    todoSearchbox.push({ text: text, completed: false });
    saveTodos(todoSearchbox);
    toggleModal();
  };
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((t) => t.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((t) => t.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        todoSearchbox,
        deleteTodos,
        completeTodos,
        modal,
        setModal,
        toggleModal,
        submitTask,
        prueba,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
