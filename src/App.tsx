import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import BootstrapButton from "./components/BootstrapButton";
import MoshButton from "./components/MoshButton";
import AlertDismissableChallenge from "./components/AlertDismissableChallenge";
import {useState} from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      
      {alertVisible && 
      <Alert onClose={() => setAlertVisibility(false)}>
        Skremmende <strong>alert</strong> her
      </Alert>}

      <AlertDismissableChallenge
        onClick={() => setAlertVisibility(true)}
        color="warning"
      >
        Trykk for en alert message over
      </AlertDismissableChallenge>
    </>
  );
}

export default App;
