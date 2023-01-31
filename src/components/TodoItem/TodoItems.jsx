import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { Item } from "./Item";
import styles from "./todoItems.module.css";

export const TodoItems = ({ todos, setTodos }) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <>
      {darkMode ? (
        <div className={styles.whiteContainer}>
          {todos.map((el, i) => (
            <Item
              key={i}
              contents={el.contents}
              id={i}
              setTodos={setTodos}
              todos={todos}
              isCheck={el.completed}
            />
          ))}
        </div>
      ) : (
        <div className={styles.container}>
          {todos.map((el, i) => (
            <Item
              key={i}
              contents={el.contents}
              id={i}
              setTodos={setTodos}
              todos={todos}
              isCheck={el.completed}
            />
          ))}
        </div>
      )}
    </>
  );
};
