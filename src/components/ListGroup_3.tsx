import React from "react";

// BuildingComponents_4_Rendering_Lists

// I forrige leksjon hardcodet vi alle li tagger. Her gjør vi litt
// mindre hardcoding, siden vi i det minste bare hardcoder en liste,
// som vi deretter looper igjennom med en map JS funksjon.

// Legg merke til key attributten inni hver li tag
// Uten den har man ingen ID for hver li, og det er vanskelig
// å gjøre ting dynamisk med listen senere. Før vi satte den inn
// fikk vi også en advarsel i Console i nettleseren, som sa:
// hook.js:608 Warning: Each child in a list should have a unique "key" prop.

const ListGroup_3 = () => {
  const klubber = ["Viking", "Bodø Glimt", "Tromsø", "Brann", "Molde"];
  return (
    <>
      <h1>ListGroup_3</h1>
      <ul className="list-group">
        {klubber.map((klubb) => (
          <li key={klubb}>{klubb}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup_3;

/*Tilhørende App.tsx

import ListGroup_3 from "./components/ListGroup_3";

function App() {
  return <ListGroup_3 />;
}

export default App;

*/
