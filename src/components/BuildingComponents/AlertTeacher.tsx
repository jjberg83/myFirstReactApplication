import React, { ReactNode } from "react";

interface Props {
  onClose: () => void;
  children: ReactNode;
}

const AlertTeacher = ({ onClose, children }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default AlertTeacher;

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
