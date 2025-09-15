// StylingComponents_CSS_Modules
import { useState } from "react";
// import "./ListGroup_3.css"; // I stedet for å importere vanlig css....
import styles from "./ListGroup_3.module.css"; // ...importerer vi en CSS module. Da kolliderer det ikke med CSS definert i App.css
// styles ovenfor brukes som et element vi kan sette inn i koden under. Der vi før hadde "list-group" i koden under, må vi nå legge inn dette elementet i stedet for

// Styling Components > CSS-in-JS
// Noen elsker denne stilen. Andre hater den. Så ikke konsensus med denne altså.

// Forksjellige libraries som kan brukes er (det finnes flere): Styled components, Emotion og Polished. Vi bruker Styled components her.

interface Props {
  elements: string[];
  heading: string;
  onSelectItem: (element: string) => void;
}

const ListGroup_3 = ({ elements, heading, onSelectItem }: Props) => {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className={styles.myHeading}>{heading}</h1>
      {elements.length == 0 && <p>Ingen fæle elementer</p>}
      {/* <ul className="list-group"> */}
      {/* <ul className={styles["list-group"]}> */}
      <ul className={styles.listGroup}>
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

export default ListGroup_3;

/*Tilhørende App.tsx

// Man må skrive hele pathen uten index file
// import ListGroup_3 from "./components/StylingComponents/ListGroup_3/ListGroup_3"; 

// Med index file på plass holder det å referere til mappen, siden vi i index file sier hva index er. 
// Instruktør navngir den som index.ts. Jeg må bruke index.TSX for at det skal fungere.
import ListGroup_3 from "./components/StylingComponents/ListGroup_3"; 

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
