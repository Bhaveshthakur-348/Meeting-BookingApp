import React, { useState } from "react";
import "./SearchDates.css";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
// import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function SearchDates() {
  const dateValue: Date = new Date("17/06/2021 10:30 AM");
  const minDate: Date = new Date("17/06/2021 09:00 AM");
  const maxDate: Date = new Date("17/06/2021 06:00 PM");

  return (
    <div className="center">
      <DateTimePickerComponent
        value={dateValue}
        min={minDate}
        max={maxDate}
        formate="dd-MM-yy HH:mm"
        step={60}
      ></DateTimePickerComponent>
    </div>
  );
}
export default SearchDates;
