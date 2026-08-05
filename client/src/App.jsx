import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Habits from "./pages/Habits";
import Mood from "./pages/Mood";
import Journal from "./pages/Journal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/tasks" element={<Tasks />} />
<Route path="/habits" element={<Habits />} />
<Route path="/mood" element={<Mood />} />
<Route path="/journal" element={<Journal />} />
   </Routes>
  );
}

export default App;