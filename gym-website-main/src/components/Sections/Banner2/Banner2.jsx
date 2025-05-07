import React from "react";
import BannerImg from "../../../assets/banner2.png"; 
import BeginTransparent from "../BeginButton/BeginTransparent";

const Banner2 = () => {
  return (
    <section className="py-14 dark:bg-dark bg-white duration-300"> 
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center"> 
         
          <div className="w-full">
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-5xl md:text-7xl">
                  <span className="font-bold">01</span> 
                </div>
                <div>
                  <p className="text-primary text-sm md:text-base">კომპანიის შესახებ</p> 
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    ჩვენს შესახებ
                  </h2>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-7 md:leading-8 tracking-wide"> 
                ჩვენი კლუბი არის გლობალური, მსოფლიოში სიდიდით მეექვსე ადგილზე.
              </p>
              <p data-aos="fade-up" data-aos-delay="300" className="leading-7 md:leading-8">
                შეგიძლიათ გვესტუმროთ ჩვენს ყველაზე ორიგინალურ დარბაზში რუსთაველის გამზირი 25.
              </p>
              <BeginTransparent />
            </div>
          </div>
          
          <div data-aos="fade-up" className="w-full">
            <img
              src={BannerImg}
              alt="ჩვენი სპორტ დარბაზის ინტერიერი"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] object-cover w-full drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;