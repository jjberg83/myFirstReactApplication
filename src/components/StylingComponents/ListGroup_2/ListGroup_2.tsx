// StylingComponents_CSS_Modules
import { useState } from "react";
// import "./ListGroup_2.css"; // I stedet for å importere vanlig css....
import styles from "./ListGroup_2.module.css"; // ...importerer vi en CSS module. Da kolliderer det ikke med CSS definert i App.css
// styles ovenfor brukes som et element vi kan sette inn i koden under. Der vi før hadde "list-group" i koden under, må vi nå legge inn dette elementet i stedet for

interface Props {
  elements: string[];
  heading: string;
  onSelectItem: (element: string) => void;
}

const ListGroup_2 = ({ elements, heading, onSelectItem }: Props) => {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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

export default ListGroup_2;

/*Tilhørende App.tsx

// Man må skrive hele pathen uten index file
// import ListGroup_2 from "./components/StylingComponents/ListGroup_2/ListGroup_2"; 

// Med index file på plass holder det å referere til mappen, siden vi i index file sier hva index er. 
// Instruktør navngir den som index.ts. Jeg må bruke index.TSX for at det skal fungere.
import ListGroup_2 from "./components/StylingComponents/ListGroup_2"; 

function App() {
  let klubber = [
    "Viking",
    "Bodø Glimt",
    "Tromsø",
    "Brann",
    "Molde",
    "Manchester United",
  ];
  let overskrift = "ListGroup_2";

  const handleSelectItem = (element: string) => console.log(element);

  return (
    <>
      <ListGroup_2
        elements={klubber}
        heading={overskrift}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;


*/
