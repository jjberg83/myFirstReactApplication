import ListGroup_8 from "./components/ListGroup_8";

function App() {
  let klubber = [
    "Viking",
    "Bodø Glimt",
    "Tromsø",
    "Brann",
    "Molde",
    "Manchester United",
  ];
  let overskrift = "ListGroup_8";

  // Her lager vi første implementasjon av signaturen fra interfacet definert i ListGroup_8.tsx.
  // Navnekonvensjon å skrive handle<metodenavn>
  const handleSelectItem = (element: string) => console.log(element);

  // Og her lager jeg en ny implementasjon, for samme komponent! Den bruker jeg i den andre instansen av ListGroup_8.tsx.
  const handleSelectItem_2 = (element: string) =>
    console.log(
      "Man kan lage flere implementasjoner av hva som skal skje når en knapp trykkes på, så lenge man følger signaturen i interfacet Props."
    );
  return (
    <>
      <ListGroup_8
        elements={klubber}
        heading={overskrift}
        onSelectItem={handleSelectItem} // Her bruker vi én implementasjon av onSelectItem
      />
      ;
      <ListGroup_8
        elements={klubber}
        heading={overskrift}
        onSelectItem={handleSelectItem_2} // Samme komponent, men vi legger inn en anne implememtasjon av metoden onSelectItem
      />
      ;
    </>
  );
}

export default App;
