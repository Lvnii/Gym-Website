import React, { useState } from "react";
import BannerImg from "../../assets/hero.jpg";
import RegistrationForm from "../Navbar/RegistrationForm";
import { motion } from "framer-motion";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const BgStyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div
      style={BgStyle}
      className="dark:bg-black dark:text-white duration-300"
    >
      <div className="bg-white/70 dark:bg-black/80 duration-300">
        <div className="container min-h-[620px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-5xl md:text-7xl font-bold"
            >
              შენი ფიტნეს მოგზაურობა იწყება აქ!
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              “შენი მიზნის მიღწევა ჩვენთან ერთად შესაძლებელია.”
            </p>
            <button
              onClick={() => setShowForm(true)}
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once="true"
              className="primary-btn"
            >
              დაიწყე აქ
            </button>
          </div>
        </div>
      </div>

      
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
            >
              ✖
            </button>

            <RegistrationForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
