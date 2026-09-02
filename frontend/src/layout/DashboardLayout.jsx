import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/dashboard.css";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-main">
        <Navbar />

        <main className="dashboard-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;