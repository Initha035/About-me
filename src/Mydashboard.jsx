import React from "react";

function Mydashboard() {
  return (
    <>
      <div
        className="text-white h-screen flex justify-centeritems-center bg-cover"
        style={{ backgroundImage: "url('/dashimg.jpg" }}
      >
        <div className="pl-4 mt-2">
          <h1 className=" text-6xl mb-6 courgette-regular">
            {" "}
            Welcome To My Web!
          </h1>

          <h1 className="text-4xl font-bold mb-4 edu-tas-beginner-unique">
            ABOUT ME:
          </h1>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-3">
            <div className="col-span-1">
              <p class="mb-5 text-left rtl:text-left text-black dark:text-white edu-tas-beginner-unique text-2xl block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                With every stroke of creativity, I bring my imagination to
                life.I am Initha Murugesan.I am from the Mango city the
                Salem.Currently persuing B.tech information technology in
                M.kumarasamy College of engineering with cgpa of 8.1 ,I have a
                skill in programming language like python and c in intermmediate
                level and also know to create an frontend of website using
                bootsrap and tailwind frameworks . The project i done is
                TracknTracehub with the team consists of 3 members and my role
                in that project was creating the frontend,the project is about
                efficient recovery of lost items and the reconnection of
                individuals with their belongings. the technoligies used in the
                project are React.js and Laravel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Mydashboard;
