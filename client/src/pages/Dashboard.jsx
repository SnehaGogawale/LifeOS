import MainLayout from "../layouts/MainLayout";

function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">
        Welcome to LifeOS 🚀
      </h1>

      <p className="text-gray-600 mt-2">
        Your productivity dashboard is ready.
      </p>
    </MainLayout>
  );
}

export default Dashboard;