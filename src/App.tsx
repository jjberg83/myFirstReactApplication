// Man må skrive hele pathen uten index file
// import ListGroup_1 from "./components/StylingComponents/ListGroup_1/ListGroup_1"; 

// Med index file på plass holder det å referere til mappen, siden vi i index file sier hva index er. 
// Instruktør navngir den som index.ts. Jeg må bruke index.TSX for at det skal fungere.
import ListGroup_1 from "./components/StylingComponents/ListGroup_1"; 

function App() {
  let klubber = [
    "Viking",
    "Bodø Glimt",
    "Tromsø",
    "Brann",
    "Molde",
    "Manchester United",
  ];
  let overskrift = "ListGroup_1";

  const handleSelectItem = (element: string) => console.log(element);

  return (
    <>
      <ListGroup_1
        elements={klubber}
        heading={overskrift}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
