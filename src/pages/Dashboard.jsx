import schedules from "../data/schedules";
import ScheduleCard from "../components/ScheduleCard";

function Dashboard({ players, attendance }) {
  const countByPosition = (pos) =>
    players.filter((player) => player.position === pos).length;

  const today = new Date().toLocaleDateString("sv-SE");

  const sortedSchedules = [...schedules].sort((a, b) =>
    a.date.localeCompare(b.date),
  );

  const nextSchedule = sortedSchedules.find(
    (schedule) => schedule.date >= today,
  );
  const totalSessions = Object.keys(attendance).length;

  const attendanceStats = players
    .map((player) => {
      const count = Object.values(attendance).filter((ids) =>
        ids.includes(player.id),
      ).length;
      const rate =
        totalSessions === 0 ? 0 : Math.round((count / totalSessions) * 100);
      return { ...player, count, rate };
    })
    .sort((a, b) => b.rate - a.rate);
  return (
    <div>
      <h2>Dashboard</h2>

      <div className="stats">
        <div className="card stat">
          <strong>{players.length}</strong>
          <span>Tổng cầu thủ</span>
        </div>
        <div className="card stat gk">
          <strong>{countByPosition("GK")}</strong>
          <span>Thủ môn</span>
        </div>
        <div className="card stat df">
          <strong>{countByPosition("DF")}</strong>
          <span>Hậu vệ</span>
        </div>
        <div className="card stat mf">
          <strong>{countByPosition("MF")}</strong>
          <span>Tiền vệ</span>
        </div>
        <div className="card stat fw">
          <strong>{countByPosition("FW")}</strong>
          <span>Tiền đạo</span>
        </div>
      </div>

      <h3>Buổi sắp tới</h3>
      {nextSchedule ? (
        <ul>
          <ScheduleCard schedule={nextSchedule} />
        </ul>
      ) : (
        <p>Chưa có buổi nào sắp tới.</p>
      )}

      <h3>Tỉ lệ đi đá ({totalSessions} buổi đã điểm danh)</h3>
      {totalSessions === 0 ? (
        <p>Chưa có buổi nào được điểm danh.</p>
      ) : (
        <table className="rate-table">
          <thead>
            <tr>
              <th>Cầu thủ</th>
              <th>Có mặt</th>
              <th>Tỉ lệ</th>
            </tr>
          </thead>
          <tbody>
            {attendanceStats.map((player) => (
              <tr key={player.id}>
                <td>
                  #{player.number} {player.name}
                </td>
                <td>
                  {player.count}/{totalSessions}
                </td>
                <td>{player.rate}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dashboard;
