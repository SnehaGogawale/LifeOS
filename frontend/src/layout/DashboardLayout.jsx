import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/dashboard.css";

function DashboardLayout({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="app-main">
        <Navbar />

        <main className="app-content">
          <div className="content-container page-transition">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;