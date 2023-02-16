import React, { useRef } from "react";
//import React from "react";
//import IssueList from "../IssueList/IssueList";
import "./AddIssue.css"

function AddIssuePage({issues, setIssues}) {

    const issueNameRef = useRef()
    const priorityRef = useRef()
    const assignRef = useRef()

    var priority;
    var assign;

    function updatePriority(e) {  priority = priorityRef.current.value }

    function updateAssign(e) {  assign = assignRef.current.value  }
 

    function handleAddTodo(e) {
        //idk if this is good code
        e.preventDefault()

        const name = issueNameRef.current.value

        if (name === '') return 
        setIssues(prevIssues => {
            //hardcoded id
            return [...prevIssues, {id: 1, name: name, priority: priority, assign: assign }]
        })

        issueNameRef.current.value = null

    }

  return (
    <div className="add-issue">
        <form>
            <label>Description<input ref={issueNameRef} type="text" placeholder="Description of the Issue..."/></label>
            <label>Assign To
                <select name="forDev" id="forDev" ref={assignRef} onChange={updateAssign}> 
                    <option  value="John">John</option>
                    <option  value="Martin">Martin</option>
                    <option  value="Sara">Sara</option>
                    <option  value="Divyansh">Divyansh</option>
                    <option value="Add" className="add">+ New Person</option>
                </select>
            </label>
            <label>Priority
                <select name="priority" id="priority" ref={priorityRef} onChange={updatePriority} >
                    <option value="low">low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Extra-High">Extra-High</option>
                </select>
            </label>
            <label>Date
                <select name="Date" id="Date">
                </select>
            </label>
              <button onClick={handleAddTodo} type="submit">Add</button>
        </form> 
    </div>
  );
}

export default AddIssuePage;
