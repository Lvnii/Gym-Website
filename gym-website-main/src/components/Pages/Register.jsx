import React from "react";
import { Link } from "react-router-dom"; 

const RegisterPage = () => {
  return (
    <div className="pt-40 px-4 max-w-md mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">რეგისტრაცია</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            სახელი
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700"
            placeholder="თქვენი სახელი"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            ელ.ფოსტა
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700"
            placeholder="თქვენი ელ.ფოსტა"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            პაროლი
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700"
            placeholder="პაროლი"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium">
            გაიმეორეთ პაროლი
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700"
            placeholder="გაიმეორეთ პაროლი"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
        >
          რეგისტრაცია
        </button>
        
        <div className="text-center mt-4">
          <p className="text-gray-600 dark:text-gray-300">
            უკვე დარეგისტრირებული ხარ?{' '}
            <Link 
              to="/login" 
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              შესვლა
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;