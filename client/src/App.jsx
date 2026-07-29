import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Habits from "./pages/Habits";

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
   </Routes>
  );
}

export default App;