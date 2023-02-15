import React from 'react'

export default function Issue({issue}) {
  return (
    <div className="indv-issue">
      <p className="close-issue">Close Issue</p>
      <p>Assigned<span>Sara</span></p>
      <p>Priority<span>Medium</span></p>
      <p>Description</p>
      <p className="description-text">{issue.name}</p>
      <hr/>
    </div>
  )
}
