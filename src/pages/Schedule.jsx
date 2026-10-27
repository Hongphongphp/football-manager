import ScheduleCard from "../components/ScheduleCard";
import initialSchedules from "../data/schedules";
function Schedule() {
  const schedules = initialSchedules;
  const sortedSchedules = [...schedules].sort((a, b) =>
    a.date.localeCompare(b.date),
  );
  return (
    <div>
      <h2>Lịch hoạt động</h2>
      <ul className="list">
        {sortedSchedules.map((schedule) => {
          return <ScheduleCard schedule={schedule} key={schedule.id} />;
        })}
      </ul>
    </div>
  );
}
export default Schedule;
