import React, { ReactNode } from "react";

// Dette er challenge 2, men lærers løsning
// Jeg lagde alt i én komponent. Han delte opp i to.

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

const BootstrapButtonTeacher = ({
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

export default BootstrapButtonTeacher;

// Kode tilhørende App.tsx
// import BootstrapButton from "./components/BoostrapButtonTeacher";

// function App() {
//   const handleOnSelectedItem = () => console.log("Knapp er trykket på");
//   return (
//     <>
//       {/* Legg merke til at vi ikke gir noen farge her (men kan hvis vi vil) */}
//       <BootstrapButton onSelectedItem={handleOnSelectedItem}>
//         Bouvet ASA
//       </BootstrapButton>
//     </>
//   );
// }

// export default App;
