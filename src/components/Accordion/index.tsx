import React, { useState } from 'react'

type Props = {
  children: React.ReactNode;
  title: string;
}

export default function Accordion({ children, title }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <h3>{title}</h3>
      <button onClick={() => setOpen(open => !open)}>{ open ? "Close" : "Open" } the accordion</button>
      {open ? (

      <div>
        {children}
      </div>
      ) : <></>}
    </div>
  )
}