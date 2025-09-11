import BootstrapButton from "./components/BoostrapButton";
import AlertTeacher from "./components/AlertTeacher";
import { useState } from "react";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  // På de to linjene under lager man egne implementasjoner av signaturene bestemt i komponentene.
  // Ønsker man å skifte implementasjon, eller bruke komponenten om igjen med en annen implementasjon,
  // kan man gjøre det uten å bruke forskjellige komponeneter. Man bare bruker den med forskjellige argumenter.
  const handleOnSelectedItem = () => setAlertVisibility(true); 
  const handleOnClose = () => setAlertVisibility(false);
  return (
    <>
      {alertVisibility && <AlertTeacher onClose={handleOnClose}>Her kommer en beskjed når du trykker</AlertTeacher>}
      <BootstrapButton onSelectedItem={handleOnSelectedItem}>
        Bouvet ASA
      </BootstrapButton>
    </>
  );
}

export default App;


