const MonthYearDisplay = ({
  decrement,
  monthYearIndex,
  currentMonthYear,
  increment,
}) => {
  return (
    <div id="month-row">
      <button onClick={decrement} disabled={monthYearIndex === 0 || currentMonthYear === 2000}>
        {"<"}
      </button>
      <div className="month">{currentMonthYear}</div>
      <button onClick={increment} disabled={monthYearIndex === 11 || currentMonthYear === 3000}>
        {">"}
      </button>
    </div>
  );
};
export default MonthYearDisplay;
