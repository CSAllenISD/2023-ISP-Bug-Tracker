import React, { useRef, useState } from "react";
import AssignList from "./AssignList";
import "./AddIssue.css"
import Assign from "./Assign";

function AddIssuePage({issues, setIssues}) {

    const issueNameRef = useRef()
    const priorityRef = useRef()
    const assignRef = useRef()
    const newAssignRef = useRef()

    const [assignees, setAssign ] = useState([{name: "John", id: 1 }])

    // change to arr[0]
    var priority = 'low';
    var assign = 'John'; 

    function updatePriority(e) {  priority = priorityRef.current.value }

    function updateAssign(e) {  assign = assignRef.current.value  }
 

    function handleAddTodo(e) {
        //idk if this is good code
        e.preventDefault()

        const name = issueNameRef.current.value

        if (name === '') return 
        setIssues(prevIssues => {
            // TODO: hardcoded id
            console.log(...prevIssues, {id: 1, name: name, priority: priority, assign: assign } )
            return [...prevIssues, {id: 1, name: name, priority: priority, assign: assign }]
        })
        issueNameRef.current.value = null

    }

    function handleAddAssignee(e){
        e.preventDefault()

        const name = newAssignRef.current.value
        // console.log(name)

        if (name === '') return
        setAssign(prevAssign => {
            // TODO: hardcoded id idk if it even needs id 
            console.log(...prevAssign, {id: 2, name: name})
        })

        assignRef.current.value = null

    }

  return (
    <div className="add-issue">
        <form>
            <label>Description<input ref={issueNameRef} type="text" placeholder="Description of the Issue..."/></label>
            <label>Assign To
                <select name="forDev" id="forDev" ref={assignRef} onChange={updateAssign}> 
                    <AssignList assignees={assignees} />
                </select>
                    {/* TODO: both input and btn look out of place; do not push these to main */}
                    <input type="text" name="" id="new-person" ref={newAssignRef} placeholder="New assignee name"/>
                    <button value="Add" className="add" onClick={handleAddAssignee}>+ New Person</button>
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
