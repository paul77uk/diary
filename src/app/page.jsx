"use client";

import { diary } from "../diary";
import { useState } from "react";
import MonthYearDisplay from "@/components/MonthYearDisplay.jsx";

export default function Home() {
  let currentDate = new Date();
  let currentMonthIndex = currentDate.getMonth();

  const [monthIndex, setMonthIndex] = useState(currentMonthIndex);
  const [year, setYear] = useState(currentDate.getFullYear());

  // console.log(monthIndex);
  console.log(diary)
  let currentYear = currentDate.getFullYear();
  let currentYearObjectIndex = diary.indexOf(
    diary.find((obj) => obj.year === currentYear)
  );
  let currentMonth = diary[year].months[monthIndex].month;
  let currentMonthDays =
    diary[year].months[monthIndex].days;
  let currentDay =
    diary[year].months[currentDate.getMonth()].days[
      currentDate.getDate() - 1
    ].day;
  let currentDaysEntry =
    diary[year].months[monthIndex].days[
      currentDate.getDate() - 1
    ].entry;
  console.log(diary);

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

      {/* year display
      <div id="month-row">
        <button onClick={decrementYear} disabled={year === 2000}>
          {"<"}
        </button>
        <div className="month">{year}</div>
        <button onClick={incrementYear} disabled={year === 3000}>
          {">"}
        </button>
      </div> */}

      {currentMonthDays.map((day) => (
        <div key={day.day}>
          <div>{day.day}</div>
        </div>
      ))}
      <div>{currentDaysEntry}</div>
    </main>
  );
}
