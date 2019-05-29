import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <ul key={todo.id} className="collection-item">
          <li
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </li>
        </ul>
      );
    })
  ) : (
    <p className="center">You dont have any todo's left yay !!</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
