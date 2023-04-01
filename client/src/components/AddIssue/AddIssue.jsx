import React from "react";
import "./AddIssue.css"
function AddIssue() {

  return (
    <div className="grey-card-container">
    <div className="add-issue">
        <form>
            <label>Description<input type="text" placeholder="Description of the Issue..."/></label>
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
              <button type="submit">Add</button>
        </form> 
    </div>
    </div>
  );
}

export default AddIssue;
