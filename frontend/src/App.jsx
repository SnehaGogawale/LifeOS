import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Habits from "./pages/Habits";
import Mood from "./pages/Mood";
import Journal from "./pages/Journal";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/habits"
          element={
            <ProtectedRoute>
              <Habits />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mood"
          element={
            <ProtectedRoute>
              <Mood />
            </ProtectedRoute>
          }
        />

        <Route
          path="/journal"
          element={
            <ProtectedRoute>
              <Journal />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route
          path="*"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;