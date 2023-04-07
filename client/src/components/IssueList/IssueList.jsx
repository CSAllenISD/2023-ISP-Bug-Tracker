import React from 'react'
import Issue from '../Issue/Issue.jsx'

export default function IssueList( {issues} ) {
   return (
      issues && issues.map(issue => { //checks if exists
        return <Issue key={issue.id} issue={issue} />
    })
  )
}
