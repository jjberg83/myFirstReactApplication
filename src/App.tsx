import ListGroup_4 from "./components/StylingComponents/ListGroup_4/ListGroup_4";
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
  let overskrift = "ListGroup_4";

  const handleSelectItem = (element: string) => console.log(element);

  return (
    <>
      <ListGroup_4
        elements={klubber}
        heading={overskrift}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
