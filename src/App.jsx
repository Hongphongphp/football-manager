import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import initialPlayers from "./data/players";
import Players from "./pages/Players";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import Attendance from "./pages/Attendance";
import Navbar from "./components/Navbar";
function App() {
  const [players, setPlayers] = useState(initialPlayers);
  const [attendance, setAttendance] = useState({});
  return (
    <div>
      <h1>Football Team Manager</h1>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Dashboard players={players} attendance={attendance} />}
        />
        <Route
          path="/players"
          element={<Players players={players} setPlayers={setPlayers} />}
        />
        <Route path="/schedule" element={<Schedule />} />
        <Route
          path="/attendance"
          element={
            <Attendance
              players={players}
              attendance={attendance}
              setAttendance={setAttendance}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
