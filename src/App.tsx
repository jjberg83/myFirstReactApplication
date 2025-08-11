import Message from "./components/Message";
import Paragraph from "./components/Paragraph";
import JJBergParagraph from "./components/JJBergParagraph";
import ListGroup from "./components/ListGroup";
//import { Fragment } from "react/jsx-runtime";

function App() {
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
  return <ListGroup />;
}

export default App;
