import React from "react";
import styles from "./TodoContainer.module.css";

export const TodoContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
