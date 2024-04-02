import React from "react";

const PersonalizationForm = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-6 rounded-md ">
        <h2 className="text-center text-lg font-semibold mb-4">
          Which are you most interested in?
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Choose just one.This will help us get you started (but won't limit
          your expereince.)
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-md p-4 ">
            <span className="bg-white text-yellow-600 rounded-full p-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6067/6067121.png"
                alt="Calendly Logo"
                className="h-8 mr-1 text-blue-500"
              />
            </span>
            <span>Learning specific skills to advance my career</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-md p-4 ">
            <span className="bg-white text-yellow-600 rounded-full p-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/471/471094.png"
                alt="Calendly Logo"
                className="h-8 mr-1 text-blue-500"
              />
            </span>
            <span>Exploring new topics I'm interested in.</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-md p-4 ">
            <span className="bg-white text-yellow-600 rounded-full p-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCH_cLguKQzmW8YP9bNbfdgfNULTWvVQTl5Mu2mlhepg&s"
                alt="Calendly Logo"
                className="h-8 mr-1 text-blue-500"
              />
            </span>
            <span>Refreshing my math foundations.</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-md p-4 ">
            <span className="bg-white text-yellow-600 rounded-full p-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4988/4988340.png"
                alt="Calendly Logo"
                className="h-8 mr-1 text-blue-500"
              />
            </span>
            <span>Excersing my brain to stay sharp.</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-md p-4 ">
            <span className="bg-white text-yellow-600 rounded-full p-2">
              <img
                src="https://cdns.iconmonstr.com/wp-content/releases/preview/2017/240/iconmonstr-eye-9.png"
                alt="Calendly Logo"
                className="h-8 mr-1 text-blue-500"
              />
            </span>
            <span>Something else</span>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 text-right ">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalizationForm;
