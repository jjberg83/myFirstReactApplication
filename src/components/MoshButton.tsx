// rafce er shortcuten, es7+ er extension
import React from 'react'

// ? betyr at color er optional, siden den har en default verdi. Er bare fordi vi vil kvitte oss med feilmelding. Fungerer uansett
interface Props {
    children: string,
    onClick: () => void,
    // color?: string (denne måten å gjøre det på gir bruker mulighet til å skrive inn whatever, også klasser som ikke finnes i Bootstrap)
    // Ved å heller gjøre det som under, passer TypeScript på at hvis ikke en av disse er valgt, får man en error. Bugs oppdages tidlig.
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "secondary" | "light" | "dark"
}

const MoshButton = ({children, onClick, color="secondary"}: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default MoshButton