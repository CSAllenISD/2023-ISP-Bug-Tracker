import React, { useRef, useState, useEffect } from "react";
import AssignList from "./AssignList";
import "./AddIssue.css"
import axios from "axios"


const { uuid4 } = require('uuid4');


function AddIssuePage({setIssues}) {


    const issueNameRef = useRef()
    const assignRef = useRef()
    const newAssignRef = useRef()


    const [assignees, setAssign ] = useState([{}])


    const [assigneeToBeAdded, SetAssigneeToBeAdded] = useState("")


    const [backendData, setBackendData] = useState([{}])


    const [priority, setPriority] = useState("Low")


    useEffect(() => {
        axios.get('/assignees')
          .then(response => {
            setBackendData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
       //TODO check docs for what empty arr does
   
    // console.log(backendData)
   
    var assign = assignees[0].name;
   
    {(typeof backendData.assignees === 'undefined') ? (
        <p>Loading...</p>
    ): (
        console.log(backendData.assignees[0].name)
    )}
     


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


    // function handleAddAssignee(e){
    //     e.preventDefault()


    //     const name = newAssignRef.current.value
       
    //     if (name === '') return
    //     const postData = {
    //         name: name,
    //       };


    //     axios.post('/assignees', postData)
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });


    //     newAssignRef.current.value = null
    // }


    const handleAddAssignee = (e) => {
        e.preventDefault()
       
        const name = assigneeToBeAdded
       
        if (name === '') return
        const postData = {
            name: name,
          };


        axios.post('/assignees', postData)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });




    }


  return (
    <div className="add-issue">
        <form>
            {/* Description */}
            <form>
                <label>Description<input ref={issueNameRef} type="text" placeholder="Description of the Issue..."/></label>
            </form>
            {/* Assign */}
            <form>
                <label>Assign To
                    <select name="forDev" id="forDev" value={assign} onChange={(e) => setAssign(e.target.value)}>
                        {
                        // TODO loading not working https://www.youtube.com/watch?v=EcRFYF4B3IQ
                        <AssignList assignees={backendData} />
                        }
                    </select>
                   
                    {/* add assign */}
                    <form onSubmit={handleAddAssignee}>
                        <input type="text" name="" id="new-person" placeholder="New assignee name" value={assigneeToBeAdded} onChange={(e) => SetAssigneeToBeAdded(e.target.value)}/>
                        <button value="Add" className="add">+ New Person</button>
                    </form>
                </label>
            </form>
            {/* Priority */}
            <form>
                <label>Priority
                    <select name="priority" id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} >
                        <option value="Low">low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Extra-High">Extra-High</option>
                    </select>
                </label>
            </form>
              <button onClick={handleAddTodo} type="submit">Add</button>
        </form>
    </div>
  );
}


export default AddIssuePage;



