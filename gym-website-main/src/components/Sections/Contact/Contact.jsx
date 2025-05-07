import React, { useState } from "react";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-100 dark:bg-dark py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-black/80 dark:text-white">
                <span className="text-primary">გაათავისუფლე შენი პოტენციალი.</span>{" "}
                თქვენი სხეული არის თქვენი ცხოვრების წესის ანარეკლი.
              </h1>
            </div>
            <div className="sm:grid sm:place-items-center">
              <button
                onClick={() => setShowModal(true)}
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase"
              >
                დაგვიკავშირდი
              </button>
            </div>
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

export default Contact;
