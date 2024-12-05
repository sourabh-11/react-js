import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data
    // Replace this with an actual API request to fetch the authenticated user's role
    axios.get("/api/user")
      .then(response => {
        setUser(response.data);  // Set the user role (student, instructor, or admin)
      })
      .catch(error => console.error("Error fetching user data:", error));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-medium mb-6">Welcome {user.role}!</h2>

        {user.role === "student" && <StudentDashboard />}
        {user.role === "instructor" && <InstructorDashboard />}
        {user.role === "admin" && <AdminDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;
