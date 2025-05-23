  import React, { useState } from "react";
  import { FaCameraRetro } from "react-icons/fa";
  import { GiNotebook } from "react-icons/gi";
  import { SlNote } from "react-icons/sl";

  const skillsData = [
    {
      name: "ოქროს ბარათი",
      price: 499,
      icon: <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />,
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
      icon: <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />,
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
      icon: <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />,
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
    const [showModal, setShowModal] = useState(false);

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
                  className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray-200 dark:bg-dark hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group"
                >
                  {skill.icon}
                  <h1 className="text-3xl font-bold">{skill.name}</h1>
                  <h1 className="text-center text-4xl font-semibold text-primary">${skill.price}</h1>
                  {skill.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
                  <p className="font-semibold text-2xl">ვალიდურობა : {skill.duration}</p>
                  <button
                    onClick={() => setShowModal(true)}
                    className="primary-btn mt-4 group-hover:scale-105 duration-200"
                  >
                    მეტი ინფორმაცია
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-[90%] max-w-md">
              <h2 className="text-lg font-bold mb-4 text-center text-black dark:text-white">
                დატოვე შენი ელ-ფოსტა და ჩვენი თანამშრომელი დაგიკავშირდება
              </h2>
              <input
                type="email"
                placeholder="შეიყვანე ელ-ფოსტა"
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md mb-4 dark:bg-black dark:text-white"
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
                >
                  დახურვა
                </button>
                <button className="px-4 py-2 bg-primary text-white hover:bg-primary/80 rounded">
                  გაგზავნა
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  export default Services;
