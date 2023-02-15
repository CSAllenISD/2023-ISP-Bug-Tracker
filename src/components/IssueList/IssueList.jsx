import React from 'react'
import Issue from '../Issue/Issue.jsx'

export default function IssueList( {issues} ) {
  if (issues != null) {   // may or may not be necessary
   return (
      issues.map(issue => {
        return <Issue key={issue.id} issue={issue} />
    })
  )
  }
}
