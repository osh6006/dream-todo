import React from "react";
import { Item } from "./Item";
import styles from "./todoItems.module.css";

export const TodoItems = () => {
  return (
    <div className={styles.container}>
      <Item />
    </div>
  );
};
