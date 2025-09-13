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

// Kode i App.tsx
// import BootstrapButton from "./components/BoostrapButton";
// import AlertTeacher from "./components/AlertTeacher";
// import { useState } from "react";

// function App() {
//   const [alertVisibility, setAlertVisibility] = useState(false);
//   // På de to linjene under lager man egne implementasjoner av signaturene bestemt i komponentene.
//   // Ønsker man å skifte implementasjon, eller bruke komponenten om igjen med en annen implementasjon,
//   // kan man gjøre det uten å bruke forskjellige komponeneter. Man bare bruker den med forskjellige argumenter.
//.  // Man kunne ikke bakt de to under inn i én komponent og oppnådd det samme. Begge de indre komponentene hadde
//   // fint klart å gitt beskjed til App, men trikset med {true && hvaSomSkalSkjeHvisTrue} hadde bare virket for
//   // hele komponenten, og man kunne ikke valgt å skjule kun Alert delen av den.
//   const handleOnSelectedItem = () => setAlertVisibility(true);
//   const handleOnClose = () => setAlertVisibility(false);
//   return (
//     <>
//       {alertVisibility && <AlertTeacher onClose={handleOnClose}>Her kommer en beskjed når du trykker</AlertTeacher>}
//       <BootstrapButton onSelectedItem={handleOnSelectedItem}>
//         Bouvet ASA
//       </BootstrapButton>
//     </>
//   );
// }

// export default App;
