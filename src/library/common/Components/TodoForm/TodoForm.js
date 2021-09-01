import React from "react";
import { TodoContext } from "../TodoContext";

const TodoForm = () => {
  const [newTaskValue, setNewTaskValue] = React.useState("");
  const { toggleModal, submitTask } = React.useContext(TodoContext);
  const newTaskRead = (event) => {
    setNewTaskValue(event.target.value);
  };
  const enterKey = (event) => {
    if (event.keyCode === 13) {
      submitTask(newTaskValue);
    }
  };

  return (
    <form
      className="todoCreator"
      onSubmit={() => {
        submitTask(newTaskValue);
      }}
    >
      <label className="Modal-label">Crea un nuevo ToDo!</label>
      <textarea
        className="newTask"
        id="newTask"
        placeholder="Sacar a pasear a mi perrito"
        value={newTaskValue}
        onChange={newTaskRead}
        onKeyDown={enterKey}
      ></textarea>
      <div className="button-Container">
        <button type="submit">Agregar</button>
        <button onClick={toggleModal} type="button">
          Cancelar
        </button>
      </div>
    </form>
  );
};
export { TodoForm };
