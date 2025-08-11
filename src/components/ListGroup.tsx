function ListGroup() {
  const cities = ["London", "Berlin", "Paris", "Melbourne", "Buenos Aires"];

  /*
    Wrap hele mapping funksjonaliteten inni {}
    Key propertien er noe React krever for å kunne gjenkjenne hvert element i arrayen over.
    Vanligvis brukes APIer for å hente slike lister. Da kunne man bare brukt city.id i stedet.
  */
  return (
    <>
      <h1>ListGroup</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
