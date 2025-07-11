import React from "react";

export default function buttonDate({ onChange }) {
  return (
    <input
      type="month"
      id="appointment-date"
      name="appointmentDate"
      className="selectButton"
      onChange={(e) => {
        const [year, month] = e.target.value.split("-");
        onChange({ month, year });
      }}
    />
  );
}
