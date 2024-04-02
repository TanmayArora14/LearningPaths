import React from "react";

const MathComfortLevel = () => {
  return (
    <div className=" p-4 rounded-md mt-20">
      <div className="bg-white p-6 rounded-lg ">
        <h2 className="text-center text-2xl font-bold mb-4">
          What is your math comfort level?
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Choose the highest level you feel confident in — you can always adjust
          later.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-200 p-4 rounded-md">
            <p className="text-gray-500 text-center mb-4">5 × 1/2 = ?</p>
            <p className="text-gray-700 font-medium text-center">Arithmetic</p>
            <p className="text-gray-500 font-medium text-center">
              Introductory
            </p>
          </div>
          <div className="bg-blue-100 p-4 rounded-md">
            <p className="text-gray-500 text-center mb-4">3x + 5 = 4</p>
            <p className="text-gray-700 font-medium text-center">
              Basic Algebra
            </p>
            <p className="text-gray-500 font-medium text-center">
              Foundational
            </p>
          </div>
          <div className="bg-gray-200 p-4 rounded-md">
            <p className="text-gray-500 text-center mb-4">
              x = (-b ± √(b^2 - 4ac)) / 2a
            </p>
            <p className="text-gray-700 font-medium text-center">
              Intermediate Algebra
            </p>
            <p className="text-gray-500 font-medium text-center">
              Intermediate
            </p>
          </div>
          <div className="bg-gray-200 p-4 rounded-md">
            <p className="text-gray-500 text-center mb-4">∫x^2dx = ?</p>
            <p className="text-gray-700 font-medium text-center">Calculus</p>
            <p className="text-gray-500 font-medium text-center">Advanced</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="bg-black text-white py-2 px-4 rounded-md">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MathComfortLevel;
