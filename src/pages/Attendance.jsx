import { useState } from "react";
import schedules from "../data/schedules";
function Attendance({ players, attendance, setAttendance }) {
  const sortedSchedules = [...schedules].sort((a, b) =>
    a.date.localeCompare(b.date),
  );
  const [selectedId, setSelectedId] = useState(sortedSchedules[0].id);
  const presentIds = attendance[selectedId] || [];

  const handleToggle = (playerId) => {
    const newIds = presentIds.includes(playerId)
      ? presentIds.filter((id) => id != playerId)
      : [...presentIds, playerId];
    setAttendance({ ...attendance, [selectedId]: newIds });
  };

  return (
    <div>
      <h2>Điểm danh</h2>
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(Number(e.target.value))}
      >
        {sortedSchedules.map((schedule) => (
          <option key={schedule.id} value={schedule.id}>
            {schedule.date} : {schedule.title}
          </option>
        ))}
      </select>
      <p className="muted">
        Có mặt : {presentIds.length} / {players.length}
      </p>
      <ul className="list">
        {players.map((player) => (
          <li key={player.id} className="card">
            <label className="check-row">
              <input
                type="checkbox"
                checked={presentIds.includes(player.id)}
                onChange={() => handleToggle(player.id)}
              />
              #{player.number} {player.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;
