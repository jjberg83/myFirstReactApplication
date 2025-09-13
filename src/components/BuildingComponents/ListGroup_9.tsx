// BuildingComponents_8_Props_VS_State

import { useState } from "react";

// Alle props, altså argumenter til komponenten, KAN teknisk sett endres på slik jeg viser nedenfor.
// Men det er ikke slik man bør bruke React. Skal de endres, bør det skje utenfor komponenten.
// Behandle disse som immutable inni komponenten.
interface Props {
  elements: string[];
  heading: string;
  onSelectItem: (element: string) => void;
}

const ListGroup_9 = ({ elements, heading, onSelectItem }: Props) => {
  // State variabelen under skiller seg fra Props (i praksis argument) over ved at det er meningen at denne skal fornandres.
  let [selectedIndex, setSelectedIndex] = useState(-1);
  // Teknisk sett kan man gjøre følende (men man bør ikke)
  elements = ["Stavanger, Trondheim, Bergen, Stavanger, Kristiansand"];

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

export default ListGroup_9;

/*Tilhørende App.tsx

import ListGroup_9 from "./components/ListGroup_9";

function App() {
  // Denne blir endret på inni selve komponenten, og det bør man absolutt ikke gjøre!
  let klubber = [
    "Viking",
    "Bodø Glimt",
    "Tromsø",
    "Brann",
    "Molde",
    "Manchester United",
  ];
  let overskrift = "ListGroup_9";

  const handleSelectItem = (element: string) => console.log(element);

  return (
    <>
      <ListGroup_9
        elements={klubber}
        heading={overskrift}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;


*/
