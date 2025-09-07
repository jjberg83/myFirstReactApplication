import Alert_1 from "./components/Alert_1";

function App() {
  const beskjed = "Sjokolade er det beste snopet!";
  return (
    <>
      {/* Under gir vi teksten som skal være inni Alert som et vanlig argument (eller prop) */}
      {/* <Alert_1 beskjed={beskjed} /> */}

      {/* Og her bruker vi fortsatt prop. Men ved å kalle propen "children" i interfacet,
      kan man legge den inn som en child mellom åpne og lukke tagen til Alert_1.*/}
      {/* <Alert_1>{beskjed}</Alert_1> */}

      {/* Akkurat det samme som den over, men her legger vil til HTML kode, må da definere children som type ReactNode i interfacet */}
      <Alert_1>
        Sjokolade er det <strong>beste</strong> snopet!
      </Alert_1>
    </>
  );
}

export default App;
