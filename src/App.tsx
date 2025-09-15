import ListGroup_3 from "./components/StylingComponents/ListGroup_3/ListGroup_3";
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
