import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import initialPlayers from "./data/players";
import Players from "./pages/Players";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import Attendance from "./pages/Attendance";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const [players, setPlayers] = useState(initialPlayers);
  const [attendance, setAttendance] = useState({});
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser({ username });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="app">
      <Navbar user={user} onLogout={handleLogout} />
      <main className="container">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={user}>
              <Dashboard players={players} attendance={attendance} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/players"
          element={
            <ProtectedRoute user={user}>
              <Players players={players} setPlayers={setPlayers} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/schedule"
          element={
            <ProtectedRoute user={user}>
              <Schedule />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance"
          element={
            <ProtectedRoute user={user}>
              <Attendance
                players={players}
                attendance={attendance}
                setAttendance={setAttendance}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            user ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />
          }
        />
      </Routes>
      </main>
    </div>
  );
}

export default App;
