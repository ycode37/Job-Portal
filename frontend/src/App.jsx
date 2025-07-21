import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Alljob from "./pages/Alljob";
import Jobdetail from "./pages/Jobdetail";
import About from "./pages/About";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const adminPath = useLocation().pathname.includes("admin");
  const employerPath = useLocation().pathname.includes("employer");
  return (
    <>
      {/* <h1 className="text-red-500">Hello</h1> */}

      <div>
        {adminPath || employerPath ? null : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-jobs" element={<Alljob />} />
          <Route path="/job-details/:id" element={<Jobdetail />} />
          <Route path="/About" element={<About />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        {adminPath || employerPath ? null : <Footer />}
      </div>
    </>
  );
};

export default App;
