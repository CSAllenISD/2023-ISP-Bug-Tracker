import React from 'react'
import Assign from './Assign'

export default function AssignList({assignees}) {
  if (assignees != null){
    return(
      assignees.map(assigned => {
        return <Assign key={assigned.id} assingees={assigned} /> 
      })
    )
  }
}
