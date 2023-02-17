import React from 'react'

export default function Assign({assingees}) {
    console.log(assingees)
  return (
    <option  value={assingees.name}>{assingees.name}</option>
    )
}
