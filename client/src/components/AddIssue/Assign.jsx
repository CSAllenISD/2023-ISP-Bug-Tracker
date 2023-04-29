import React from 'react'

export default function Assign({assingees}) {
  return (
    <option  value={assingees.name}>{assingees.name}</option>
    )
}
