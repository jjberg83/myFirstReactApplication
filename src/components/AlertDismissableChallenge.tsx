import React, { ReactNode } from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "secondary"
    | "light"
    | "dark";
}

const AlertDismissableChallenge = ({ children, onClick, color = "secondary" }: Props) => {
  return (
    
      <button
        type="button"
        className={"close btn btn-" + color}
        onClick={onClick}
      >
        {children}
      </button>
    
  );
};

export default AlertDismissableChallenge;
