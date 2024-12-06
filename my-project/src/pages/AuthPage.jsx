import React, { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div>
        
      {isLogin ? (
        <LoginForm switchToRegister={toggleForm} />
      ) : (
        <RegisterForm switchToLogin={toggleForm} />
      )}
    </div>
  );
};

export default AuthPage;
