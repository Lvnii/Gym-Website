import React from "react";
import BannerImg from "../../assets/banner2.png";

const Banner2 = () => {
  return (
    <div className="py-14 dark:bg-dark bg-white duration-300">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">01</h1>
                </div>
                <div>
                  <p className="text-primary">გლობალური ფიტნესი</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">ჩვენს შესახებ</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                ჩვენი კლუბი არის გლობალური, მსოფლიოში სიდიდით მეექვსე ადგილზე.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                შეგიძლიათ გვესტუმროთ ჩვენს ყველაზე ორიგინალურ დარბაზში რუსთაველის გამზირი 25.
              </p>
              <button data-aos="fade-up" className="button-outline">
                დაიწყე აქ
              </button>
            </div>
          </div>
          
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
