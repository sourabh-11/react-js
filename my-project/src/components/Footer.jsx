import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 E-Learning Platform. All rights reserved.</p>
        <p>Follow us on:
          <a href="#" className="ml-2 text-blue-400 hover:underline">Instagram</a>
          <a href="#" className="ml-2 text-blue-400 hover:underline">Facebook</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
