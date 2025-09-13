// StylingComponents_Creating_a_listgroup_component
import { useState } from "react";
import "./ListGroup_1.css";

// Poenget med leksjonen er å vise hvordan man gjør det hvis man ønsker å skrive all CSS selv.
// Han anbefaler det ikke. Hovedtrekk: man lagrer css og tsx fil i samme mappe, slik at de to 
// alltid henger sammen og er lett å flytte til andre prosjekter. Man lager en index.tsx fil
// hvis man ønsker kortere path i import i App.tsx (mye styr for en slash mindre synes nå jeg).
// Og nederst kan du se hvordan jeg må kommentere ut importlinjen fra BootStrap i main.tsx.
// Tar jeg den med overstyrer den min custom CSS styling. 

interface Props {
  elements: string[];
  heading: string;
  onSelectItem: (element: string) => void;
}

const ListGroup_1 = ({ elements, heading, onSelectItem }: Props) => {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {elements.length == 0 && <p>Ingen fæle elementer</p>}
      <ul className="list-group">
        {elements.map((element, index) => (
          <li
            key={element}
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(element);
            }}
          >
            {element}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup_1;

/*Tilhørende App.tsx

// Man må skrive hele pathen uten index file
// import ListGroup_1 from "./components/StylingComponents/ListGroup_1/ListGroup_1"; 

// Med index file på plass holder det å referere til mappen, siden vi i index file sier hva index er. 
// Instruktør navngir den som index.ts. Jeg må bruke index.TSX for at det skal fungere.
import ListGroup_1 from "./components/StylingComponents/ListGroup_1"; 

function App() {
  let klubber = [
    "Viking",
    "Bodø Glimt",
    "Tromsø",
    "Brann",
    "Molde",
    "Manchester United",
  ];
  let overskrift = "ListGroup_1";

  const handleSelectItem = (element: string) => console.log(element);

  return (
    <>
      <ListGroup_1
        elements={klubber}
        heading={overskrift}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;


*/

// Tilhørende main.tsx (jeg må kommentere ut Bootstrap importlinjen)
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// //  import "bootstrap/dist/css/bootstrap.css"; <---------------- KOMMENTERT UT!

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
