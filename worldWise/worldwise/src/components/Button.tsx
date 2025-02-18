import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  type: "primary" | "back" | "position";
  onClick?: (e: any) => void;
  children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  const { type, onClick, children } = props;

  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
};
