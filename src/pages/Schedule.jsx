import ScheduleCard from "../components/ScheduleCard";
import PageHeader from "../components/PageHeader";
import initialSchedules from "../data/schedules";
function Schedule() {
  const schedules = initialSchedules;
  const sortedSchedules = [...schedules].sort((a, b) =>
    a.date.localeCompare(b.date),
  );
  return (
    <div>
      <PageHeader
        icon="calendar"
        title="Lịch hoạt động"
        subtitle="Trận đấu và buổi tập của đội"
      />
      <ul className="list">
        {sortedSchedules.map((schedule) => {
          return <ScheduleCard schedule={schedule} key={schedule.id} />;
        })}
      </ul>
    </div>
  );
}
export default Schedule;
