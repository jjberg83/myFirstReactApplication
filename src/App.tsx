import ListGroup_9 from "./components/ListGroup_9";

function App() {
  // Denne blir endret på inni selve komponenten, og det bør man absolutt ikke gjøre!
  let klubber = [
    "Viking",
    "Bodø Glimt",
    "Tromsø",
    "Brann",
    "Molde",
    "Manchester United",
  ];
  let overskrift = "ListGroup_9";

  const handleSelectItem = (element: string) => console.log(element);

  return (
    <>
      <ListGroup_9
        elements={klubber}
        heading={overskrift}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
