import React from 'react';
import "./TodoList.css"

const TodoList = (props) => (
    <section className="TodoList-container">
        <ul className="TodoList">
            {props.children}
        </ul>
    </section>
);

export { TodoList };