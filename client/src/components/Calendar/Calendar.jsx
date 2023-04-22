import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Meeting",
        allDay: true,
        start: new Date(2023, 4, 0),
        end: new Date(2023, 4, 0),
    },
    {
        title: "Vacation",
        start: new Date(2023, 4, 7),
        end: new Date(2023, 4, 10),
    },
    {
        title: "Conference",
        start: new Date(2023, 4, 20),
        end: new Date(2023, 4, 23),
    },
];

function Calendar_() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
      /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("There is an event already there"); 
                break;
             }
    
        }
        
        
        setAllEvents([...allEvents, newEvent]);
    }

   
    return (
        <div className="Calendar">
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div class="inputBox">
                <input type="text" placeholder="Add Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date"  selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button class="btn" onClick={handleAddEvent}>Add Event</button>
            </div>
            <Calendar localizer={localizer} defaultDate={new Date()} defaultView="month" events={allEvents} 
            startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default Calendar_;