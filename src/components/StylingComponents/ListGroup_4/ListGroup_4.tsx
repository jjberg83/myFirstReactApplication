// Styling Components: Inline styles

// Det er teknisk mulig å bruke inline css styles, men bør brukes veldig sparsommemlig og som en last resort
// Men husk navnegreia. I CSS: background-color, her: backgroundColor
// Alle HTML elementer har en style prop som vi benytter oss av, enten ved å legge inn CSS kode direkte, eller via variabel

import { useState } from "react";
import styles from "./ListGroup_4.module.css";

interface Props {
  elements: string[];
  heading: string;
  onSelectItem: (element: string) => void;
}

const ListGroup_4 = ({ elements, heading, onSelectItem }: Props) => {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  // Her lager jeg en variabel som jeg putter inn i koden på linje 45. Blir litt mindre rot av det slik. Legg merke til barteparenteser.
  let skriftFarge = { color: "blue", fontSize: "2px" };

  return (
    <>
      <h1 className={styles.myHeading}>{heading}</h1>
      {elements.length == 0 && <p>Ingen fæle elementer</p>}
      <ul
        className={styles.listGroup}
        // Her benytter vi oss av ULens style komponent til å inline style litt
        // Vi legger CSS koden rett inn, men kan også legge det inn som en variabel
        // Legg merke til dobbel barteparentes
        style={{ backgroundColor: "yellow", fontSize: "100px" }}
      >
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
            style={skriftFarge}
          >
            {element}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup_4;

/*Tilhørende App.tsx
import ListGroup_4 from "./components/StylingComponents/ListGroup_4/ListGroup_4";
import "./App.css";

function App() {
  let klubber = [
    "Viking",
    "Bodø Glimt",
    "Tromsø",
    "Brann",
    "Molde",
    "Manchester United",
  ];
  let overskrift = "ListGroup_4";

  const handleSelectItem = (element: string) => console.log(element);

  return (
    <>
      <ListGroup_4
        elements={klubber}
        heading={overskrift}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
*/
