import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = 'სახელი არის აუცილებელი.';
    if (!formData.email.trim()) tempErrors.email = 'ფოსტა არის აუცილებელი.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'ფოსტა არის არასწორი.';
    if (!formData.password) tempErrors.password = 'პაროლი არის აუცილებელი.';
    if (formData.password.length < 6) tempErrors.password = 'პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან.';
    if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = 'პაროლები არ ემთხვევა ერთმანეთს.';

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
      alert('Registration Successful!');
      
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg bg-white shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registration</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        
        <div>
          <input
            type="text"
            name="name"
            placeholder="შეიყვანეთ სახელი"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        
        <div>
          <input
            type="email"
            name="email"
            placeholder="შეიყვანეთ მეილი"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        
        <div>
          <input
            type="password"
            name="password"
            placeholder="შეიყვანეთ პაროლი"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        
        <div>
            <input
                type="password"
                name="confirmPassword"
                placeholder="დაადასტურეთ პაროლი"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.confirmPassword && (<p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>)}
        </div>

        
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md transition-all duration-200"
        >
          რეგისტრაცია
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;