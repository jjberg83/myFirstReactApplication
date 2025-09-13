// BuildingComponents_6_Managing_State

import { useState } from "react";

const ListGroup_6 = () => {
  let klubber = ["Viking", "Bodø Glimt", "Tromsø", "Brann", "Molde"];
  //   let selectedIndex = -1; // Lager vi selectedIndex slik når vi den ikke i onClick metodekallet inni return statementen. Ingen røde streker, det bare virker ikke i nettleser
  let [selectedIndex, setSelectedIndex] = useState(-1); // Norm å navngi slik [variabel, setVariabel] = useStat(startVerdiForVariabel)

  return (
    <>
      <h1>ListGroup_6</h1>
      {klubber.length == 0 && <p>Ingen fæle elementer</p>}
      <ul className="list-group">
        {klubber.map((klubb, index) => (
          <li
            key={klubb}
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              // selectedIndex = index; // Denne viser ingen feil i syntaks, men ingenting skjer i nettleser
              setSelectedIndex(index);
            }}
          >
            {klubb}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup_6;

/*Tilhørende App.tsx

import ListGroup_6 from "./components/ListGroup_6";

function App() {
  return (
    <>
      {/* Under har vi to instanser av samme komponent, kun for å vise at de har hver sin state (useState)}
      <ListGroup_6 />
      <ListGroup_6 />;
    </>
  );
}

export default App;

*/
