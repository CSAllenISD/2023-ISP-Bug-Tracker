import React, { useRef, useEffect } from "react";
//import React from "react";
//import IssueList from "../IssueList/IssueList";
import "./AddIssue.css"

function AddIssuePage({issues, setIssues}) {

    const issueNameRef = useRef()
    const LOCAL_STORAGE_KEY = 'issues.storage'

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(issues))
    }, [issues])

    function handleAddTodo(e) {
        const name = issueNameRef.current.value
        if (name === '') return 
        console.log(name)
        setIssues(prevIssues => {
            //hardcoded id
            return [...prevIssues, {id: 1, name: name}]
        })
        issueNameRef.current.value = null
    }

  return (
    <div className="add-issue">
        <form>
            <label>Description<input ref={issueNameRef} type="text" placeholder="Description of the Issue..."/></label>
            <label>Assign To
                <select name="forDev" id="forDev"> 
                    <option value="John">John</option>
                    <option value="Morten">Morten</option>
                    <option value="Sara">Sara</option>
                    <option value="Divyansh">Divyansh</option>
                </select>
            </label>
            <label>Priority
                <select name="priority" id="priority">
                    <option value="low">low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Extra-High">Extra-High</option>
                </select>
            </label>
              <button onClick={handleAddTodo} type="submit">Add</button>
        </form> 
    </div>
  );
}

export default AddIssuePage;
