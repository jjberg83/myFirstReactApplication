// Building components > 11: Passing children
// Vi skal bygge komponenter som kan akseptere children
// Klarer ikke enda å se hvorfor det kan være bedre enn å bare ta det inn i komponenten som en "vanlig" prop
// Alt man gjør er bare å kalle det children i props. Da kan man legge det inn mellom åpne og lukketag til denne
// komponenten i App.tsx. Men jeg klarer ikke akkurat nå å se hvorfor det skal være en fordel?
import { ReactNode } from "react";

interface Props {
  // beskjed: string; // Slik man må gjøre når man skal legge inn alert tekst som en vanlig prop, dvs argument for komponenten
  // children: string; // Slik må man gjøre om man ønsker å legge det til som et child til komponentnen i app
  children: ReactNode; // Og dette må man gjøre hvis man vil legge det til som child MED html kode i app
}

const Alert_1 = ({ children }: Props) => {
  return <div className="alert alert-warning ">{children}</div>; // Alt likt på denne linjen uansett
};

export default Alert_1;

// Tilhørende kode i App.tsx
// import Alert_1 from "./components/Alert_1";

// function App() {
//   const beskjed = "Sjokolade er det beste snopet!";
//   return (
//     <>
//       {/* Under gir vi teksten som skal være inni Alert som et vanlig argument (eller prop) */}
//       {/* <Alert_1 beskjed={beskjed} /> */}

//       {/* Og her bruker vi fortsatt prop. Men ved å kalle propen "children" i interfacet,
//       kan man legge den inn som en child mellom åpne og lukke tagen til Alert_1.*/}
//       {/* <Alert_1>{beskjed}</Alert_1> */}

//       {/* Akkurat det samme som den over, men her legger vil til HTML kode, må da definere children som type ReactNode i interfacet */}
//       <Alert_1>
//         Sjokolade er det <strong>beste</strong> snopet!
//       </Alert_1>
//     </>
//   );
// }

// export default App;
