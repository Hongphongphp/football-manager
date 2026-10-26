import "./App.css";
import { Routes, Route } from "react-router-dom";

import Players from "./pages/Players";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import Attendance from "./pages/Attendance";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <h1>Football Team Manager</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/players" element={<Players />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </div>
  );
}

export default App;
