// BuildingComponents_6_Passing_Data_Via_Props
// I de forrige leksjonene har vi hardcodet en overskrift og en liste inni selve komponenten.
// Nå skal vi legge inn disse som argumenter til komponenten. Gjør det via Props, som er
// React sin interface variant.

import { useState } from "react";

interface Props {
  elements: string[]; // Typescript vil se hvilke elementer man har i arrayen!
  heading: string;
}

const ListGroup_7 = ({ elements, heading }: Props) => {
  let [selectedIndex, setSelectedIndex] = useState(-1); // Norm å navngi slik [variabel, setVariabel] = useStat(startVerdiForVariabel)

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
              // selectedIndex = index; // Denne viser ingen feil i syntaks, men ingenting skjer i nettleser
              setSelectedIndex(index);
            }}
          >
            {element}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup_7;

/*Tilhørende App.tsx

import ListGroup_7 from "./components/ListGroup_7";

function App() {
  let klubber = [
    "Viking",
    "Bodø Glimt",
    "Tromsø",
    "Brann",
    "Molde",
    "Manchester United",
  ];
  let overskrift = "ListGroup_7";
  return (
    <>
      <ListGroup_7 elements={klubber} heading={overskrift} />;
    </>
  );
}

export default App;

*/
