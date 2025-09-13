import React from "react";

// BuildingComponents_5_Conditional_Rendering
// Koden på linje 13 er en veldig vanlig teknikk brukt av React utviklere {true && detManVilReturnere} -> detManVilReturnere, {false && detManVilReturnere} -> false, og ingenting vises, altså vises ikke <p> tagen i det hele tatt
const ListGroup_4 = () => {
  let klubber = ["Viking", "Bodø Glimt", "Tromsø", "Brann", "Molde"];
  klubber = [];

  return (
    <>
      <h1>ListGroup_4</h1>
      { klubber.length == 0 && <p>Ingen fæle elementer</p> } // Dette er den eneste koden som er ny fra forrige versjon
      <ul className="list-group">
        {klubber.map((klubb) => (
          <li key={klubb}>{klubb}</li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup_4;

/*Tilhørende App.tsx

import ListGroup_4 from "./components/ListGroup_4"

function App() {
  return <ListGroup_4 />
}

export default App;

*/
