import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Profile.css";
function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-avatar">
          {user?.name?.charAt(0).toUpperCase() || "U"}
        </div>

        <h1>
          {user?.name || "User"}
        </h1>

        <p className="profile-email">
          {user?.email || "No email available"}
        </p>

        <div className="profile-info">

          <div className="profile-info-item">
            <span>Name</span>
            <strong>
              {user?.name || "-"}
            </strong>
          </div>

          <div className="profile-info-item">
            <span>Email</span>
            <strong>
              {user?.email || "-"}
            </strong>
          </div>

        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;