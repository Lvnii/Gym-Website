import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Common/Navbar/Navbar";
import Footer from "./components/Common/Footer/Footer";
import Information from "./components/Pages/Information";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import HomePage from "./components/Pages/Home"

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <HomePage />
            </>
          } />
          
          <Route path="/information" element={<Information />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element= {<HomePage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;