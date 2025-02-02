import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faKey,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const moveToDash = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <div
        className="text-white h-screen flex justify-center items-center bg-cover"
        style={{ backgroundImage: "url('/backiee-286745-landscape.jpg" }}
      >
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
          <h1 className="text-4xl font-bold text-center mb-6 courgette-regular text-white">
            Get Started
            <FontAwesomeIcon icon={faUserPlus} className="ml-3 text-white" />
          </h1>
          <form action="">
            <div className="relative my-6">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute left-3 top-2 text-white"
              />
              <input
                type="text"
                className="block w-72 py-2.3 pl-10 pr-2 text-lg text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer"
                placeholder=""
              />

              <label
                htmlFor=""
                className="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-0 left-10 -z-10 origin-[0] peer-focus:left-10 peer-focus:text-blue-300 peer-focus:dark:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
                User Name
              </label>
            </div>
            <div className="relative my-6">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-3 top-2 text-white"
              />
              <input
                type="email"
                className="block w-72 py-2.3 pl-10 pr-2 text-lg text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer"
                placeholder=""
              />

              <label
                htmlFor=""
                className="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-0 left-10 -z-10 origin-[0] peer-focus:left-10 peer-focus:text-blue-300 peer-focus:dark:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
                Mail-id
              </label>
            </div>

            <div className="relative my-6">
              <FontAwesomeIcon
                icon={faKey}
                className="absolute left-3 top-2 text-white"
              />
              <input
                type="password"
                className="block w-72 py-2.3 pl-10 pr-2 text-lg text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor=""
                className="absolute text-base text-white duration-300 -translate-y-6 tranform scale-75 top-0 left-10 -z-10 orgin-[0] peer-focus:left-7 peer-focus:text-blue-300 peer-focus:dark:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
                Your Password
              </label>
            </div>
            <div className="relative my-6">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute left-3 top-2 text-white"
              />
              <input
                type="password"
                className="block w-72 py-2.3 pl-10 pr-2 text-lg text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor=""
                className="absolute text-base text-white duration-300 -translate-y-6 tranform scale-75 top-0 left-10 -z-10 orgin-[0] peer-focus:left-7 peer-focus:text-blue-300 peer-focus:dark:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
                Confirm Password
              </label>
            </div>

            <div className="flex justify-center">
              <button
                onClick={moveToDash}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-full border border-white hover:bg-black hover:text-white-500 dark:bg-blue-900 dark:hover:text-white dark:hover:bg-black"
                type="submit"
              >
                Sign-up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
