import ChallengeAlert from "./components/ChallengeAlert";

function App() {
  const handleOnSelectedItem = () =>
    console.log("Jeg klarer å gi beskjed til toppen om at jeg åpner");
  const handleOnClosing = () =>
    console.log("Jeg klarer å gi beskjed til toppen om at jeg lukker");
  return (
    <>
      <ChallengeAlert
        onSelectedItem={handleOnSelectedItem}
        onClosing={handleOnClosing}
      >
        Vis meg alert
      </ChallengeAlert>
    </>
  );
}

export default App;
