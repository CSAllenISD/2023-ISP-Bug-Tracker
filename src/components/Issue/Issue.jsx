import React from 'react'

export default function Issue({issue}) {
  return (
    // <div>
      //{issue}
    // </div>
    <div className="indv-issue">
      <p className="close-issue">Close Issue</p>
      <p>Assigned<span>Username</span></p>
      <p>Priority<span>High</span></p>
      <p>Description</p>
      <p className="description-text">{issue.name}</p>
      <hr/>




    </div>
  )
}
