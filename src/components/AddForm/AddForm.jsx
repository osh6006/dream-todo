import React, { useState } from "react";
import styles from "./addForm.module.css";

export const AddForm = ({ todos, setTodos }) => {
  const [addTodo, setAddTodo] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (addTodo !== "") {
      const newTodos = [...todos];
      newTodos.push({ contents: addTodo, completed: false });
      setTodos(newTodos);
      setAddTodo("");
    }
  };

  const handleAdd = e => {
    setAddTodo(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="addItem"
          id="addItem"
          placeholder="Add Todo"
          onChange={handleAdd}
          value={addTodo}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
