import React from "react";
import Todo from "./todo";

const todoList = ({ todos }) => {
  return (
    <div>
      {todos.map((el) => (
        <Todo todo={el} key={el.id} />
      ))}
    </div>
  );
};

export default todoList;
