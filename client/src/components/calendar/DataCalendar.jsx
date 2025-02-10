import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// 🎯 Example gym visit dates
const gymVisitDates = [
  new Date(2024, 1, 1),  // Feb 1, 2024
  new Date(2024, 1, 5),  // Feb 5, 2024
  new Date(2024, 1, 10), // Feb 10, 2024
];

const DataCalendar = () => {
  // Convert gymVisitDates into calendar event objects
  const events = gymVisitDates.map((date) => ({
    title: "🏋️ Gym",
    start: date,
    end: date, // Single-day event
    allDay: true,
  }));

  return (
    <div style={{ height: "600px", padding: "20px" }}>
      <h2>📅 Gym Visit Tracker</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default DataCalendar;
