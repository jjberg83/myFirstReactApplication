import React, { ReactNode, useState } from "react";

// Forbedring av koden fra Github Copilot, basert på mitt forslag. Jeg bruker
// en superkomponent med alt inni, og styrer state variabelen fra App.tsx.
// State variabelen legges inn som argument i Props (showAlert). Annen kul greie
// med denne løsningen er at jeg gjør to ting i metodekallene, både console logger
// og stiller state variabelen (i App.tsx).
// Muligens den beste løsningen?

interface Props {
  onSelectedItem: () => void;
  onClosing: () => void;
  showAlert: boolean;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  children: ReactNode;
}

const ChallengeAlert = ({
  onSelectedItem,
  onClosing,
  showAlert,
  color = "warning",
  children,
}: Props) => {
  return (
    <>
      {showAlert && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              onClosing();
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      <button
        type="button"
        className={`btn btn-${color}`}
        onClick={() => {
          onSelectedItem();
        }}
      >
        {children}
      </button>
    </>
  );
};

export default ChallengeAlert;

// Kode i App.tsx
// import ChallengeAlert from "./components/ChallengeAlert";

// import React, { useState } from "react";

// function App() {
//   const [showAlert, setShowAlert] = useState(false);

//   const handleOnSelectedItem = () => {
//     setShowAlert(true);
//     console.log("Jeg klarer å gi beskjed til toppen om at jeg åpner");
//   };
//   const handleOnClosing = () => {
//     setShowAlert(false);
//     console.log("Jeg klarer å gi beskjed til toppen om at jeg lukker");
//   };
//   return (
//     <>
//       <ChallengeAlert
//         onSelectedItem={handleOnSelectedItem}
//         onClosing={handleOnClosing}
//         showAlert={showAlert}
//       >
//         Vis meg alert
//       </ChallengeAlert>
//     </>
//   );
// }

// export default App;
