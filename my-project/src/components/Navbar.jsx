import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">E-Learning</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/courses" className="hover:underline">Courses</a></li>
          <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
          <li><a href="/login" className="hover:underline">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
