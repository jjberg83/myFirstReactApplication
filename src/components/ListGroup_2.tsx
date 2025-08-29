import React from "react";

// BuildingComponents_3_Fragments
const ListGroup_2 = () => {
  return (
    // Her trenger vi en h1 tag på samme nivå som ul tagen
    // Kan omslutte med <div>, <Fragment> eller bare <> for å få til det
    // Ulempen med div er at det blir et ekstra element i DOMen
    <>
      <h1>ListGroup_2</h1>
      <ul className="list-group">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </>
  );
};

export default ListGroup_2;

/*Tilhørende App.tsx

import ListGroup_2 from "./components/ListGroup_2";

function App() {
  return <ListGroup_2 />;
}

export default App;

*/
