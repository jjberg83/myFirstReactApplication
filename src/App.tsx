import ListGroup_6 from "./components/ListGroup_6";

function App() {
  return (
    <>
      {/* Under har vi to instanser av samme komponent, kun for å vise at de har hver sin state (useState) */}
      <ListGroup_6 />
      <ListGroup_6 />;
    </>
  );
}

export default App;
