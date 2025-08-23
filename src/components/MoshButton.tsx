// rafce er shortcuten, es7+ er extension
import React from 'react'

interface Props {
    children: string,
    onClick: () => void,
    color: string
}

const MoshButton = ({children, onClick, color = "btn-primary"}: Props) => {
  return (
    <button className={`btn ${color}`} onClick={onClick}>{children}</button>
  )
}

export default MoshButton