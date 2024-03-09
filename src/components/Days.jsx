const Days = ({ currentMonthDays, day, daySelected }) => {
  return (
    <div id="day-container">
      {currentMonthDays.map((d) => (
        <div
          style={{ background: day === d.day ? "lightblue" : "" }}
          onClick={() => daySelected(d.day)}
          className="day"
          key={d.day}
        >
          <div
            className="heart"
            style={{ visibility: d.entry === "" ? "hidden" : "visible" }}
          >
            💌
          </div>
          <div>{d.day}</div>
        </div>
      ))}
    </div>
  );
};
export default Days;
