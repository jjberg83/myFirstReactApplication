function ListGroup() {
  let cities = ["London", "Berlin", "Paris", "Melbourne", "Buenos Aires"];
  cities = [];

  // Her dupliserer vi mye kode, fordi vi må skrive inn h1 taggen på nytt
  // Har brukt ternary operator i stedet
  // Men la den inn i en konstant som jeg så la inn i koden nederst
  // for å unngå for mye ´polluted code´
  // if (cities.length == 0)
  //   return (
  //     <>
  //       <h1>ListGroup</h1>
  //       <p>No items found</p>
  //     </>
  //   );
  const message = cities.length === 0 ? <p>No items found</p> : null;

  /*
    Wrap hele mapping funksjonaliteten inni {}
    Key propertien er noe React krever for å kunne gjenkjenne hvert element i arrayen over.
    Vanligvis brukes APIer for å hente slike lister. Da kunne man bare brukt city.id i stedet.
  */
  return (
    <>
      <h1>ListGroup</h1>
      {message}
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
