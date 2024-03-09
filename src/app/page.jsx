"use client";

import { diary } from "../diary";
import { useState } from "react";
import MonthYearDisplay from "@/components/MonthYearDisplay.jsx";
import Days from "@/components/Days.jsx";

export default function Home() {
  let currentDate = new Date();
  let currentMonthIndex = currentDate.getMonth();

  const [monthIndex, setMonthIndex] = useState(currentMonthIndex);
  const [year, setYear] = useState(currentDate.getFullYear());

  // console.log(monthIndex);
  console.log(diary);
  let currentYear = currentDate.getFullYear();
  let currentYearObjectIndex = diary.indexOf(
    diary.find((obj) => obj.year === currentYear)
  );
  let currentMonth = diary[year].months[monthIndex].month;
  let currentMonthDays = diary[year].months[monthIndex].days;
  let currentDay =
    diary[year].months[currentDate.getMonth()].days[currentDate.getDate() - 1]
      .day;
  const [day, setDay] = useState(currentDay);

  let currentDaysEntry = diary[year].months[monthIndex].days[day - 1].entry;
  console.log(diary);

  const [entry, setEntry] = useState("");

  const incrementMonth = () => {
    if (monthIndex < 11) {
      setMonthIndex(monthIndex + 1);
    }
  };

  const decrementMonth = () => {
    if (monthIndex > 0) {
      setMonthIndex(monthIndex - 1);
    }
  };

  const incrementYear = () => {
    if (year < 3000) {
      setYear(year + 1);
    }
  };

  const decrementYear = () => {
    if (year > 2000) {
      setYear(year - 1);
    }
  };

  const daySelected = (day) => {
    setDay(day);
  };

  const submitEntry = (e) => {
    e.preventDefault();
    diary[year].months[monthIndex].days[day - 1].entry = entry;
    setEntry("");
  };

  return (
    <main>
      <h1>Diary</h1>

      {/* month display */}
      <MonthYearDisplay
        decrement={decrementMonth}
        monthYearIndex={monthIndex}
        currentMonthYear={currentMonth}
        increment={incrementMonth}
      />

      {/* year display */}
      <MonthYearDisplay
        decrement={decrementYear}
        currentMonthYear={year}
        increment={incrementYear}
      />

      <Days
        currentMonthDays={currentMonthDays}
        day={day}
        daySelected={daySelected}
      />

      <form onSubmit={submitEntry}>
        <textarea
          onChange={(e) => setEntry(e.target.value)}
          placeholder={currentDaysEntry}
          value={entry}
        />
        <button id="submit-btn">Submit</button>
      </form>
    </main>
  );
}
