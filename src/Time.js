import React from "react";

export default function Time(props) {
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let currentYear = props.date.getFullYear();
  let currentDay = props.date.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentMonth = months[props.date.getMonth()];
  return (
    <div>
      <div>
        {day} {hours}:{minutes}
      </div>
      <div>
        {currentDay} {currentMonth} {currentYear}
      </div>
    </div>
  );
}
