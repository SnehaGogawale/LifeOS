import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./Settings.css";

function Settings() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const handleDarkMode = () => {
    const newValue = !darkMode;

    setDarkMode(newValue);

    localStorage.setItem(
      "darkMode",
      newValue
    );

    toast.success(
      newValue
        ? "Dark mode enabled"
        : "Light mode enabled"
    );
  };

  const handleNotifications = () => {
    const newValue = !notifications;

    setNotifications(newValue);

    toast.success(
      newValue
        ? "Notifications enabled"
        : "Notifications disabled"
    );
  };

  const handleClearSession = () => {
    const confirmClear = window.confirm(
      "This will remove your saved login session. Continue?"
    );

    if (!confirmClear) return;

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <div className="settings-page">

      <div className="settings-header">
        <h1>⚙️ Settings</h1>
        <p>Customize your LifeOS experience.</p>
      </div>

      <div className="settings-section">
        <h2>Appearance</h2>

        <div className="setting-item">
          <div>
            <h3>🌙 Dark Mode</h3>
            <p>
              Switch between light and dark appearance.
            </p>
          </div>

          <button
            className={`toggle ${
              darkMode ? "active" : ""
            }`}
            onClick={handleDarkMode}
          >
            <span />
          </button>
        </div>
      </div>

      <div className="settings-section">
        <h2>Notifications</h2>

        <div className="setting-item">
          <div>
            <h3>🔔 Notifications</h3>
            <p>
              Receive reminders and LifeOS notifications.
            </p>
          </div>

          <button
            className={`toggle ${
              notifications ? "active" : ""
            }`}
            onClick={handleNotifications}
          >
            <span />
          </button>
        </div>
      </div>

      <div className="settings-section">
        <h2>Account</h2>

        <div className="setting-item">
          <div>
            <h3>🧹 Clear Session</h3>
            <p>
              Remove your saved login information.
            </p>
          </div>

          <button
            className="clear-session-btn"
            onClick={handleClearSession}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="settings-section">
        <h2>About LifeOS</h2>

        <p className="about-text">
          LifeOS is your personal productivity,
          habit, mood and journal management system.
        </p>

        <p className="version">
          LifeOS v1.0
        </p>
      </div>

    </div>
  );
}

export default Settings;