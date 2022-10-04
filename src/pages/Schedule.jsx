import {useState, useEffect, useRef} from "react"
import {Col} from "react-bootstrap"
import {Schedule} from "../components/schedule"
import "../scss/schedule.scss"
const events = [{title: "Test", start: new Date()}];
const formatDate = (date) => {
    return new Date(
        new Date(date).setMinutes(
          new Date(date).getMinutes() -
            new Date(date).getTimezoneOffset()
        )
      )
}
events.map((val) => val.start = formatDate(val.start))
export const SchedulePage = () => {
    console.log(new Date({year: 2022, month: 9, day: 15}))
    return (
        <div className="scheduleContainer">
            <div style={{height: "100%", width: "auto"}}>
                <Schedule events={events}/>
            </div>
        </div>
    )
}