// rafce er shortcuten, es7+ er extension
import React, { ReactNode } from "react";

// ? betyr at color er optional, siden den har en default verdi. Er bare fordi vi vil kvitte oss med feilmelding. Fungerer uansett
interface Props {
  onClick: () => ReactNode;
  // color?: string (denne måten å gjøre det på gir bruker mulighet til å skrive inn whatever, også klasser som ikke finnes i Bootstrap)
  // Ved å heller gjøre det som under, passer TypeScript på at hvis ikke en av disse er valgt, får man en error. Bugs oppdages tidlig.
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "secondary"
    | "light"
    | "dark";
}

const AlertDismissableChallenge = ({ onClick, color = "secondary" }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <button
        type="button"
        className={"close btn btn-" + color}
        onClick={onClick}
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
        Klikk for alert dismissing fra Bootstrap
      </button>
    </div>
    // <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  );
};

export default AlertDismissableChallenge;

/*
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Ay caramba!</strong> React og Bootstrap sammen blir dynamitt!
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
*/
