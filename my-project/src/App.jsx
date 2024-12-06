import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./components/Auth/LoginForm";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/" element={<AuthPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
