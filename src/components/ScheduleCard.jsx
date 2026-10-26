function ScheduleCard({ schedule }) {
  return (
    <li className={`card schedule-${schedule.type.toLowerCase()}`}>
      <span className="schedule-type">
        {schedule.type === "MATCH" ? "⚽ Trận đấu" : "🏃 Tập luyện"}
      </span>
      <h3>{schedule.title}</h3>
      <p>
        📅 {schedule.date} : 🕒 {schedule.time}
      </p>
      <p>📍 {schedule.location}</p>
    </li>
  );
}

export default ScheduleCard;
