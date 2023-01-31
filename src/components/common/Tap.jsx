import React from "react";
import styles from "./tab.module.css";

export const Tab = ({ text = "tabMenu" }) => {
  return <button className={styles.tab}>{text}</button>;
};
