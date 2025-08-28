import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import BootstrapButton from "./components/BootstrapButton";
import MoshButton from "./components/MoshButton";
import AlertDismissableChallenge from "./components/AlertDismissableChallenge";
//import { Fragment } from "react/jsx-runtime";

function App() {
  // let byer = ["Stavanger", "Bergen", "Oslo", "Kristiansand", "Trondheim"];
  // let overskrift = "Norske byer";
  // const handleSelectItem = (city: string) => {
  //   console.log(`Beskjed fra ListGroup: ${city}`);
  // };

  // let knappeTekst = "Trykk meg!"
  /*
  return (
    // Div'en som henger igjen er fordi React klagde tidligere når vi hadde flere elementer her
    // React må kjøre noe a-la .CreateElement, og derfor lar vi det ENE elementet som skapes 
    // være div her. Det er en løsning, men ikke den beste løsningen, siden vi legger til 
    // et ekstra element i DOM'en.
    <div>
      <ListGroup />
    </div>
  );
  */
  // En bedre løsning er å bruke Fragments. Man kan ha import linjen over og skrive alt inni opening og
  // closing brackets, men det er enda kortere å gjøre slik jeg gjorde under. De "tomme" bracketene er fragments
  // og skaper altså ikke nye elementer i DOM'en.
  return (
    <>
      {/* <ListGroup
        cities={byer}
        heading={overskrift}
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>world</span>!
      </Alert> */}
      {/* <BootstrapButton buttonText={knappeTekst} /> */}
      {/* Knappen har en default verdi, så den blir btn-secondary hvis vi ikke spesifiserer noe */}
      {/* <MoshButton onClick={() => console.log(`Knappen er trykket påh!`)}> Mosh er best </MoshButton> */}
      {/* Spesifiserer vi noe derimot, får knappen denne fargen */}
      <MoshButton
        onClick={() => console.log(`Knappen er trykket påh!`)}
        color="warning"
      >
        {" "}
        Mosh er best{" "}
      </MoshButton>
      {/* <AlertDismissableChallenge /> */}
    </>
  );
}

export default App;
