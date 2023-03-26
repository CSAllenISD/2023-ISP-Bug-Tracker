import React, { useRef, useState, useEffect } from "react";
import AssignList from "./AssignList";
import "./AddIssue.css"

const { uuid4 } = require('uuid4');

function AddIssuePage({setIssues}) {

    const issueNameRef = useRef()
    const priorityRef = useRef()
    const assignRef = useRef()
    const newAssignRef = useRef()

    //john and sara are for testing, remove in final build
    const [assignees, setAssign ] = useState([{name: "John", id: 1 }, {name: "Sara", id: 2}])

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])
    
    {(typeof backendData.assignees === 'undefined') ? (
        <p>Loading...</p>
    ): (
        console.log(backendData.assignees[0].name)
    )}

    var priority = 'low';
    var assign = assignees[0].name; 

    function updatePriority(e) {  priority = priorityRef.current.value }

    function updateAssign(e) {  assign = assignRef.current.value  }
 

    function handleAddTodo(e) {
        e.preventDefault()

        const name = issueNameRef.current.value

        if (name === '') return 
        setIssues(prevIssues => {
            // console.log(...prevIssues, {id: 1, name: name, priority: priority, assign: assign } )
            return [...prevIssues, {id: uuid4(), name: name, priority: priority, assign: assign }]
        })
        issueNameRef.current.value = null

    }

    function handleAddAssignee(e){
        e.preventDefault()

        const name = newAssignRef.current.value
        
        if (name === '') return
        setAssign((prevAssign) => {
            // TODO: hardcoded id idk if it even needs id 
            // console.log(...prevAssign, {id: 2, name: name})
            return[...prevAssign, {id: 2, name: name}]
        })

        newAssignRef.current.value = null

    }

  return (
    <div className="add-issue">
        <form>
            <label>Description<input ref={issueNameRef} type="text" placeholder="Description of the Issue..."/></label>
            <label>Assign To
                <select name="forDev" id="forDev" ref={assignRef} onChange={updateAssign}> 
                    {(typeof backendData.assignees === 'undefined') ? (
                        <p>Loading...</p>
                    ): (
                        <AssignList assignees={backendData.assignees} />
                    )}
                    {/* <AssignList assignees={assignees} /> */}
                </select>
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
              <button onClick={handleAddTodo} type="submit">Add</button>
        </form> 
    </div>
  );
}

export default AddIssuePage;
