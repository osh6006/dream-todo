import React from "react";
import { Item } from "./Item";
import styles from "./todoItems.module.css";

export const TodoItems = ({ todos }) => {
  return (
    <div className={styles.container}>
      {todos.map(el => (
        <Item contents={el.contents} />
      ))}
    </div>
  );
};
