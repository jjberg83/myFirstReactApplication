import ChallengeAlert from "./components/ChallengeAlert";

import React, { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleOnSelectedItem = () => {
    setShowAlert(true);
    console.log("Jeg klarer å gi beskjed til toppen om at jeg åpner");
  };
  const handleOnClosing = () => {
    setShowAlert(false);
    console.log("Jeg klarer å gi beskjed til toppen om at jeg lukker");
  };
  return (
    <>
      <ChallengeAlert
        onSelectedItem={handleOnSelectedItem}
        onClosing={handleOnClosing}
        showAlert={showAlert}
      >
        Vis meg alert
      </ChallengeAlert>
    </>
  );
}

export default App;
