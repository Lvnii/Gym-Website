import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "ოქროს ბარათი",
    price: 499,
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: [
      "ყოველთვიური წვდომა ფიტნეს ზონაზე.",
      "აპლიკაციის სესიების გარეშე.",
      "ტრენერის გარეშე.",
      "ლაივ გაკვეთილების გარეშე.",
    ],
    duration: "12 თვე",
    aosDelay: "0",
  },
  {
    name: "მოქნილი ბარათი",
    price: 899,
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: [
      "ყოველთვიური წვდომა ფიტნეს ზონაზე.",
      "აპლიკაციის სესიებით.",
      "ტრენერის გარეშე.",
      "ლაივ გაკვეთილების გარეშე.",
    ],
    duration: "12 თვე",
    aosDelay: "500",
  },
  {
    name: "პლატინუმ ბარათი",
    price: 1299,
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: [
      "ყოველთვიური წვდომა ფიტნეს ზონაზე.",
      "აპლიკაციის სესიებით.",
      "ტრენერით.",
      "ლაივ გაკვეთილებით.",
    ],
    duration: "12 თვე",
    aosDelay: "1000",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold text-center sm:text-4xl"
            >
              რატომ <span className="text-primary">უნდა აგვირჩიოთ</span> ჩვენ
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray-200 dark:bg-dark  hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group "
              >
                
                <h1 className="text-3xl font-bold">{skill.name}</h1>
                <h1 className="text-center text-4xl font-semibold text-primary">
                  ${skill.price}
                </h1>

                {skill.description.map((desc) => (
                  <p>{desc}</p>
                ))}
                <p className="font-semibold text-2xl">
                  {" "}
                  ვალიდურობა : {skill.duration}
                </p>
                <a
                  href={skill.link}
                  className="primary-btn mt-4 group-hover:scale-105  duration-200"
                >
                  მეტი ინფორმაცია
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
