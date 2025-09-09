import BootstrapButton from "./components/BoostrapButton";

function App() {
  const handleOnSelectedItem = () => console.log("Knapp er trykket på");
  return (
    <>
      {/* Legg merke til at vi ikke gir noen farge her (men kan hvis vi vil) */}
      <BootstrapButton onSelectedItem={handleOnSelectedItem}>
        Bouvet ASA
      </BootstrapButton>
    </>
  );
}

export default App;
