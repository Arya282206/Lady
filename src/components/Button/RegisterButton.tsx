// src/components/RegisterButton.tsx
import React from "react";
import "../components/Button/RegisterButton.css";

const RegisterButton: React.FC = () => {
  const handleNavigation = () => {
    window.location.href = "/register"; // Ganti dengan mekanisme routing jika menggunakan React Router
  };

  return (
    <button className="register-button" onClick={handleNavigation}>
      Register
    </button>
  );
};

export default RegisterButton;
