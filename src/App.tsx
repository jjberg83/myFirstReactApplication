import ChallengeAlert from "./components/ChallengeAlert";

function App() {
  const handleOnSelectedItem = () => console.log("Knapp er trykket på");
  return (
    <>
      <ChallengeAlert onSelectedItem={handleOnSelectedItem}>
        Vis meg alert
      </ChallengeAlert>
    </>
  );
}

export default App;
