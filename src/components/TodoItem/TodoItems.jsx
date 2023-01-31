import React from "react";
import { Item } from "./Item";
import styles from "./todoItems.module.css";

export const TodoItems = ({ todos, setTodos }) => {
  return (
    <div className={styles.container}>
      {todos.map((el, i) => (
        <Item
          key={i}
          contents={el.contents}
          id={i}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </div>
  );
};
