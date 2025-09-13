import React from "react";

// BuildingComponents_2_Creating_A_ListGroup_Component
const ListGroup_1 = () => {
  return (
    // Trenger ingen omsluttende div eller fragment her, fordi man har EN
    // ytterste tag. Hadde man lagt på en ny h1 tag utenfor ul tagen,
    // hadde man fått problemer med en gang.
    <ul className="list-group">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
  );
};

export default ListGroup_1;

/* Tilhørende App.tsx:

import ListGroup_1 from "./components/ListGroup_1";

function App() {
  return <ListGroup_1 />;
}

export default App;



*/
