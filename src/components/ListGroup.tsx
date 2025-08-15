import { MouseEvent } from "react";

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

  // Dette er en metode, en såkalt Event Handler
  // Vi bruker type annotation for å si at argumentet er av typen MouseEvent
  // Det er jo det som gjør TypeScript så bra, at man har datatype krav til argumenter
  const handleClick = (event: MouseEvent) => console.log(event);

  // Det samme som over, men jeg skrev metoden med tradisjonell syntaks
  // function handleClick(event: MouseEvent) {
  //   console.log(event);
  // }

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
            onClick={
              handleClick
              // Alternativ med ingen argument i onClick
              // console.log(
              //   "City number " + index + ": " + city + ", har blitt trykket på"
              // )

              // Alternativ med event som argument i onClick
              // og der vi skriver koden rett inn her . OBS:( onclick må da se slik ut: onClick={(event) =>)
              // console.log(event) // Man console logger info om eventen.

              // Alternativ med event som argument, men der vi
              // refererer til en metode (såkalt event handler)
              // sånn at vi kan gjøre masse greier uten å ha masse
              // kode her. Man har bare referansen til metoden,
              // så kan man se inni den hva som skjer hvis man vil
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
