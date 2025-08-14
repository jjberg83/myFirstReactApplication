function ListGroup() {
  let cities = ["London", "Berlin", "Paris", "Melbourne", "Buenos Aires"];
  // cities = [];

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

  // Vi kan bruke en constant slik hvis vi ikke tror vi trenger parametere
  // const message = cities.length === 0 ? <p>No items found</p> : null;

  // Hvis vi derimot trenger parametere, er det bedre å bruke en funksjon
  // (men her legger vi ikke inn parametere, ironisk nok. Men vi kan.)
  const getMessage = () =>
    cities.length === 0 ? <p> Ingen elementer funnet </p> : null;

  /*
    Wrap hele mapping funksjonaliteten inni {}
    Key propertien er noe React krever for å kunne gjenkjenne hvert element i arrayen over.
    Vanligvis brukes APIer for å hente slike lister. Da kunne man bare brukt city.id i stedet.
  */
  return (
    <>
      <h1>ListGroup</h1>
      {/*Hvis jeg ikke trenger parametere */}
      {/* {message} */}
      {/* Hvis jeg tror jeg kan trenge parametere i fremtiden, bruk en funksjon heller */}
      {/* {getMessage()} */}
      {/* Under ser du samme kode på en JavaScript teknikk React utviklere liker å bruke 
      For å forstå den, prøv følgende i Console i nettleser:
      true && 1
      true && "jørund er best"
      false && 1
      false && "jørund er verst*/}
      {cities.length === 0 && <p>Hei, liten beskjed her. Listen er tom!</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className="list-group-item"
            key={city}
            onClick={() =>
              console.log(
                "City number " + index + ": " + city + ", har blitt trykket på"
              )
            }
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
