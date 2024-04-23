import React from "react";
import "../../Styles/HomePage.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calendar() {
  const events = [
    { title: "", start: new Date() },
    { title: "", date: "2024-04-19" },
    { title: "", date: "2024-05-19" },
  ];

  return (
    <div className="left-pane flex flex-col px-5 h-100">
      <FullCalendar
        events={events}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  );
}

export default Calendar;
