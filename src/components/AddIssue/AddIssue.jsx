// import React, { useState, useRef, useEffect} from "react";
import React, { useState, useRef} from "react";
//import IssueList from "../IssueList/IssueList";
import "./AddIssue.css"

// const LOCAL_STORAGE_KEY = 'issue.issues'

function AddIssue() {

    const [setIssues] = useState([]);  
    const issueNameRef = useRef()

    function handleAddIssue(e) {
        const name = issueNameRef.current.value
        if (name === '') return 
        setIssues(prevIssues => {
            return [...prevIssues, {id: '1', name: name}]
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
              <button type="submit" onClick={handleAddIssue}>Add</button>
        </form> 
    </div>
  );
}

export default AddIssue;
