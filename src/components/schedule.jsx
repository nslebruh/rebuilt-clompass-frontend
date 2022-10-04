import React, {useState} from "react"
import FullCalendar from "../../node_modules/@fullcalendar/react/dist/main.js"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"

export const Schedule = (props) => {
    const {events} = props
    return (
        <React.Fragment>
        <FullCalendar

            plugins={[timeGridPlugin]}
            initialView="timeGridDay"
            events={events}
            timeZone="AEST"
            locale="AU"
            height="100%"
            slotMinTime="08:00:00"
            slotMaxTime="17:00:00"
            now={() => {return new Date(0)}}
            initialDate={new Date()}
        />
        </React.Fragment>
    )
}