import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="font-medium">
        👋 Hello, {user?.name}
      </div>
    </header>
  );
}

export default Navbar;