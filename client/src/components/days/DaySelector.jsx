import React, { useState } from "react";
import "./MultiDaySelector.css"; // Import the CSS file

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const MultiDaySelector = ({ selectedDays = [], onSelectionChange }) => {
    const [selected, setSelected] = useState(selectedDays);

    const toggleDay = (day) => {
        const updatedSelection = selected.includes(day)
            ? selected.filter((d) => d !== day)
            : [...selected, day];
        setSelected(updatedSelection);
        onSelectionChange(updatedSelection);
    };

    return (
        <div className="multi-day-container">
            {daysOfWeek.map((day) => (
                <div
                    key={day}
                    className={`day-box ${selected.includes(day) ? "selected" : ""}`}
                    onClick={() => toggleDay(day)}
                >
                    {day}
                </div>
            ))}
        </div>
    );
};

export default MultiDaySelector;
