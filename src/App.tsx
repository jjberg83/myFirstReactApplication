import ListGroup_2 from "./components/StylingComponents/ListGroup_2/ListGroup_2"; 
// Her importerer vi stiler som krasjer med det vi har i ListGroup_2.css
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