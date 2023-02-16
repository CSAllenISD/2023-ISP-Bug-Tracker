import React from 'react'

export default function Issue({issue}) {
  return (
    <div className="indv-issue">
      <p className="close-issue">Close Issue</p>
      <p>Assigned<span>{issue.assign}</span></p>
      <p>Priority<span>{issue.priority}</span></p>
      <p>Description</p>
      <p className="description-text">{issue.name}</p>
      <hr/>
    </div>
  )
}
