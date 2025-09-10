import React, { ReactNode, useState } from "react";

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

const ChallengeAlert = ({
  onSelectedItem,
  color = "warning",
  children,
}: Props) => {
  const [stateAlertBox, setStateAlertBox] = useState(false);
  return (
    <>
      {stateAlertBox && (
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
            onClick={() => setStateAlertBox(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      <button
        type="button"
        className={`btn btn-${color}`}
        onClick={() => setStateAlertBox(true)}
      >
        {children}
      </button>
    </>
  );
};

export default ChallengeAlert;

// Kode tilhørende App.tsx
// import ChallengeAlert from "./components/ChallengeAlert";

// function App() {
//   const handleOnSelectedItem = () => console.log("Knapp er trykket på");
//   return (
//     <>
//       <ChallengeAlert onSelectedItem={handleOnSelectedItem}>
//         Vis meg alert
//       </ChallengeAlert>
//     </>
//   );
// }

// export default App;
