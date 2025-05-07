import { Link } from "react-router-dom";

const LoginPage = () => {

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md pt-12">
        <h1 className="text-3xl font-bold mb-8 text-center">შესვლა</h1>
        <form className="space-y-6">
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
              placeholder="თქვენი პაროლი"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
          >
            შესვლა
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600 dark:text-gray-300">
            არ ხართ რეგისტრირებული?{" "}
            <Link 
              to="/register" 
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              დააჭირეთ აქ
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
