import Icon from "./Icon";

function ScheduleCard({ schedule }) {
  const day = schedule.date.slice(8, 10);
  const month = Number(schedule.date.slice(5, 7));
  const isMatch = schedule.type === "MATCH";

  return (
    <li className={`card schedule-card schedule-${schedule.type.toLowerCase()}`}>
      <div className="date-block">
        <span className="day">{day}</span>
        <span className="month">Th {month}</span>
      </div>
      <div className="schedule-info">
        <span className="schedule-type">
          {isMatch ? "⚽ Trận đấu" : "🏃 Tập luyện"}
        </span>
        <h3>{schedule.title}</h3>
        <p className="meta">
          <span>
            <Icon name="clock" size={15} /> {schedule.time}
          </span>
          <span>
            <Icon name="pin" size={15} /> {schedule.location}
          </span>
        </p>
      </div>
    </li>
  );
}

export default ScheduleCard;
