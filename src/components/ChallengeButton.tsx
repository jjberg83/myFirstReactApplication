import React, { ReactNode } from "react";

// Dette er challenge 2

interface Props {
  onSelectedItem: () => void;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link"; // Legg merke til at color er optional. Den har en default verdi i Props, som er fallback hvis den ikke blir definert i app.
  children: ReactNode;
}

const ChallengeButton = ({
  onSelectedItem,
  color = "warning",
  children,
}: Props) => {
  return (
    <button
      type="button"
      className={`btn btn-${color}`}
      onClick={onSelectedItem}
    >
      {children}
    </button>
  );
};

export default ChallengeButton;

// Kode tilhørende App.tsx
