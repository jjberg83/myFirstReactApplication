import React from "react";
import { MouseEvent } from "react";

// BuildingComponents_6_Handling_Events

// Vi må importere MouseEvent øverst for at React skal kunne kjøre TypeAnnotation på linje 13
// Vi kunne også droppet handleClick funksjonene, og kjørt det inline på linje 21
// med onClick={(event) => console.log(event)}
// men dette er ryddigere (spesielt når logikken blir lang ønsker man å sile bort
// komplisert logikk vekk fra jsx koden)
const ListGroup_5 = () => {
  let klubber = ["Viking", "Bodø Glimt", "Tromsø", "Brann", "Molde"];
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>ListGroup_5</h1>
      {klubber.length == 0 && <p>Ingen fæle elementer</p>}
      <ul className="list-group">
        {klubber.map((klubb, index) => (
          <li key={klubb} className="list-group-item" onClick={handleClick}>
            {klubb}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup_5;

/*Tilhørende App.tsx

import ListGroup_5 from "./components/ListGroup_5";

function App() {
  return <ListGroup_5 />;
}

export default App;

*/
