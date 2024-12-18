import React, { lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import Login from "../components/Akses/Login";
import Register from "../components/Akses/Register";
import HTML from "../pages/Materi/HTML";
import JavaScript from "../pages/Materi/JavaScript";
import ReactPage from "../pages/Materi/React";

const Router = () => {
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string): void => {
    if (username === "admin" && password === "1234") {
      console.log("Login successful!");
      alert("Login successful!");
      navigate("/");
    } else {
      console.log("Invalid credentials");
      alert("Invalid credentials. Please try again.");
    }
  };
  const handleRegister = (username: string, password: string): void => {
    if (username === "admin" && password === "1234") {
      console.log("Login successful!");
      alert("Login successful!");
      navigate("/");
    } else {
      console.log("Invalid credentials");
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Styles />
      <Header />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister}/>} />
        <Route path="/html" element={<HTML />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/react" element={<ReactPage />} />

        {routes.map((routeItem) => {
          const Component = lazy(() =>
            import(`../pages/${routeItem.component}`)
          );

          return Array.isArray(routeItem.path)
            ? routeItem.path.map((path) => (
                <Route
                  key={`${routeItem.component}-${path}`}
                  path={path}
                  element={<Component />}
                />
              ))
            : (
                <Route
                  key={routeItem.component}
                  path={routeItem.path}
                  element={<Component />}
                />
              );
        })}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
