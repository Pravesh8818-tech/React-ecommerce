import React from "react";
import login from "../../assets/login.png";
import { Link } from "react-router-dom";
import routes from "../../Routes/Path";
import toast from "react-hot-toast";
import { useState } from "react";
import { auth } from "../../Firebase/FirebaseAuth.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("All fields are required");
    } else {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          toast.success("User Logged in successfully");
          setFormData({
            email: "",
            password: "",
          });

          navigate(routes.home);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    }
  };

  return (
    <>
      <div className="relative">
        <img
          src={login}
          alt=""
          className="object-cover w-full object-center h-[200px] mt-5"
        />
        <div className="w-full h-[200px] bg-black absolute top-0 opacity-50"></div>
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-bold text-white">
          Login Page
        </h2>
      </div>
      {/* Login form */}
      <div className="container px-5 py-14 mx-auto flex ">
        <div className=" mx-auto bg-red-500 rounded-1g p-8 flex flex-col mt-8 md:mt-0 shadow-md text-white">
          <h2 className="text-white text-4x1 mb-5 md:text-4xl font-medium title-font">
            Login
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base
outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="button"
            className="text-white bg-indigo-500 border-8 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="text-sm sm:text-base text-white mt-4 text-center">
            Don't have an account?
            <Link to={routes.register}>
              <button className="ml-2 text-blue-300 hover:text-blue-400 font-semibold underline transition duration-200 cursor-pointer">
                Sign Up
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
