import ListGroup_7 from "./components/ListGroup_7";

function App() {
  let klubber = [
    "Viking",
    "Bodø Glimt",
    "Tromsø",
    "Brann",
    "Molde",
    "Manchester United",
  ];
  let overskrift = "ListGroup_7";
  return (
    <>
      <ListGroup_7 elements={klubber} heading={overskrift} />;
    </>
  );
}

export default App;
