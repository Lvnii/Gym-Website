import React, { useState } from "react";
import BannerImg from "../../../assets/hero.jpg";
import BeginButton from "../BeginButton/BeginButton"

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
            <BeginButton />
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Hero;
