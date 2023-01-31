import React from "react";
import styles from "./addForm.module.css";

export const AddForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="addItem" id="addItem" placeholder="Add Todo" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
