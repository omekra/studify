import { useEffect } from "react";

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/v1");
      const data = await response.json();
      console.log("🚀 ~ data:", data);
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>Dashboard</div>;
};
export default Dashboard;
