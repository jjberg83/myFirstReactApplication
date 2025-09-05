// BuildingComponents_7_Passing_Functions_Via_Props
// Når en av knappene trykkes, pleier som regel noe å skje på siden (annet enn at de skifter farge).
// Men vi ønsker ikke å legge inn det som skal skje inn i denne komponenenten. Det blir i prinsippet hardcoding.
// Vil man at noe annet skal skje, må man lage en duplikat komponent, der eneste forskjellen er at noe annet skjer
// når du trykker på knappen. Vi ønsker heller at komponenten gir parent komponenten beskjed om at en knapp er
// trykket på, og så skjer noe i parent komponenten. Da kan denne komponenten brukes om igjen og og igjen,
// samme hvor mange til man ønsker skal skje når knappen blir trykket på.

import { useState } from "react";

interface Props {
  elements: string[]; // Artig at string datatypen her, ender opp med å bli argumentet i metodekallet tilbake til App.tsx to linjer ned.
  heading: string;
  onSelectItem: (element: string) => void; // Dette er metodens signatur, men utenom det står vi fritt til å variere hva den skal gjøre i App.tsx
}

const ListGroup_8 = ({ elements, heading, onSelectItem }: Props) => {
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

export default ListGroup_8;

/*Tilhørende App.tsx

import ListGroup_8 from "./components/ListGroup_8";

function App() {
  let klubber = [
    "Viking",
    "Bodø Glimt",
    "Tromsø",
    "Brann",
    "Molde",
    "Manchester United",
  ];
  let overskrift = "ListGroup_8";

  // Her lager vi første implementasjon av signaturen fra interfacet definert i ListGroup_8.tsx.
  // Navnekonvensjon å skrive handle<metodenavn>
  const handleSelectItem = (element: string) => console.log(element);

  // Og her lager jeg en ny implementasjon, for samme komponent! Den bruker jeg i den andre instansen av ListGroup_8.tsx.
  const handleSelectItem_2 = (element: string) =>
    console.log(
      "Man kan lage flere implementasjoner av hva som skal skje når en knapp trykkes på, så lenge man følger signaturen i interfacet Props."
    );
  return (
    <>
      <ListGroup_8
        elements={klubber}
        heading={overskrift}
        onSelectItem={handleSelectItem} // Her bruker vi én implementasjon av onSelectItem
      />
      ;
      <ListGroup_8
        elements={klubber}
        heading={overskrift}
        onSelectItem={handleSelectItem_2} // Samme komponent, men vi legger inn en anne implememtasjon av metoden onSelectItem
      />
      ;
    </>
  );
}

export default App;

*/
