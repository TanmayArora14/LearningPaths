import React from "react";

const Component = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white rounded-lg p-8 flex flex-col sm:flex-row">
        <div className="sm:mr-8 sm:flex-shrink-0 flex justify-center mb-8 sm:mb-0">
          <img
            src="https://t3.ftcdn.net/jpg/00/42/19/70/360_F_42197066_aigiZf1P60VUB9YKfrttLq4GxCa1iYT9.jpg"
            alt="Monster"
            className="h-40 w-40"
          />
        </div>
        <div className="text-center sm:ml-40 sm:mr-40">
          <div>
            <h1 className="text-2xl font-bold mb-4">You're on your way!</h1>
            <div className="flex justify-center mb-4">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">&#9733;</span>
                <span className="text-yellow-500 mr-1">&#9733;</span>
                <span className="text-yellow-500 mr-1">&#9733;</span>
                <span className="text-yellow-500 mr-1">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "Through its engaging and well-structured courses, Brilliant has
              taught me mathematical concepts that I previously struggled to
              understand. I now feel confident approaching both technical job
              interviews and real world problem solving situations."
            </p>
            <p className="text-gray-600">– Jacob S.</p>
          </div>

          <div className="mt-10">
            <button className="bg-black text-white py-2 px-4 rounded-md">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
