import React from "react";
import { TodoContext } from "../TodoContext";
import { Header } from "../Header";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm/TodoForm";
import { Loading } from "../Loading";
import { Error } from "../Error";
import "./App.css";

const AppUI = () => {
  const {
    error,
    loading,
    todoSearchbox,
    deleteTodos,
    completeTodos,
    modal,
    prueba,
  } = React.useContext(TodoContext);
  return (
    <>
      <Header />
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && (
          <Modal>
            <Error />
          </Modal>
        )}
        {!!loading &&
          prueba.map((t) => (
            <TodoItem
              key={`prueba${prueba.indexOf(t)}`}
              text="Cargando ToDo..."
              completed={false}
            />
          ))}
        {!!loading && (
          <Modal>
            <Loading>Cargando...</Loading>
          </Modal>
        )}

        {!loading && !!todoSearchbox.length
          ? todoSearchbox.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onDelete={() => deleteTodos(todo.text)}
                onComplete={() => completeTodos(todo.text)}
              />
            ))
          : !loading &&
            !todoSearchbox.length && (
              <p className="noTodos">No tienes tareas pendientes. 😁 </p>
            )}
      </TodoList>

      {modal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      

      <CreateTodoButton />
    </>
  );
};
export { AppUI };
