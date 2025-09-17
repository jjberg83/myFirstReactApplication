// Styling Components > CSS-in-JS
// Noen elsker denne stilen. Andre hater den. Så ikke konsensus med denne altså.
// Forksjellige libraries som kan brukes er (det finnes flere): Styled components,
// Emotion og Polished. Vi bruker Styled components her.

// Starter med å installere Styled Components i Terminalen (kommandoer)
// npm i styled-components

// Vi trenger ikke en mappe lenger, siden vi ikke har en tilhørende CSS fil
// (de forrige, altså ListGroup_1 og 2,trengte mappestruktur som inneholdt .tsx og .css fil, her samler vi)

import { useState } from "react";
import styled from "styled-components";
// Etter å ha importert biblioteket, definerer vi egne komponenter, som inneholder all CSS.
// Som alltid, kan man kalle disse komponentene hva man vil (men de MÅ starte med stor bokstav!)
// Her er komponentnen som erstatter vår gamle ul
const UlErstatter = styled.ul`
  list-style: none;
  padding: 0;
  color: pink;
`;
// Og siden vi ikke lenger bruker BootStrap, må vi finne på ny logikk for vå stateVariable (den med useState)
// Det gjør vi med å lage nytt interface spesifikt for LiErsatter
// Vi forandrer også state variabelen
interface LiErstatterProps {
  active: boolean;
}
// Legg merke til at vi legger inn dette interfacet i <> under
// Vi har også en dynamisk background på komponenten, avhengig av
const LiErstatter = styled.li<LiErstatterProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  elements: string[];
  heading: string;
  onSelectItem: (element: string) => void;
}

const ListGroup_3 = ({ elements, heading, onSelectItem }: Props) => {
  // let [selectedIndex, setSelectedIndex] = useState(-1);
  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {elements.length == 0 && <p>Ingen fæle elementer</p>}
      {/* <ul className="list-group">  */}
      <UlErstatter>
        {elements.map((element, index) => (
          <LiErstatter
            // Under erstatter vi den gamle logikken for å velge hvilken som er aktiv
            // Før brukte vi BootStrap, nå finner vi en annen løsning
            // Her gjør vi bruk av det nye interfacet vi lagde på toppen
            active={index === selectedIndex}
            key={element}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(element);
            }}
          >
            {element}
          </LiErstatter>
        ))}
        {/* </ul> */}
      </UlErstatter>
    </>
  );
};

export default ListGroup_3;

/*Tilhørende App.tsx

import ListGroup_3 from "./components/StylingComponents/ListGroup_3";
// Her importerer vi stiler som krasjer med det vi har i ListGroup_3.css
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
  let overskrift = "ListGroup_3";

  const handleSelectItem = (element: string) => console.log(element);

  return (
    <>
      <ListGroup_3
        elements={klubber}
        heading={overskrift}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;



*/
