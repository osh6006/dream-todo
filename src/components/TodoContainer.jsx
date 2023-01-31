import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import styles from "./TodoContainer.module.css";

export const TodoContainer = ({ children }) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <>
      {darkMode ? (
        <div className={styles.whiteContainer}>{children}</div>
      ) : (
        <div className={styles.container}>{children}</div>
      )}
    </>
  );
};
