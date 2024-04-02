import React from "react";

const PersonalizationForm = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-6 rounded-md ">
        <h2 className="text-center text-lg font-semibold mb-4">
          Which describes you best?
        </h2>
        <p className="text-gray-600 text-center mb-6">
          This will help us personalize your experience.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-md p-4 ">
            <span className="bg-yellow-200 text-yellow-600 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </span>
            <span>Student or soon to be enrolled</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-md p-4 ">
            <span className="bg-blue-200 text-blue-600 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </span>
            <span>Professional pursuing a career</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-md p-4 ">
            <span className="bg-indigo-200 text-indigo-600 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
            </span>
            <span>Parent of a school-age child</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-md p-4 ">
            <span className="bg-green-200 text-green-600 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2 1 1 0 000-2zm-3 0a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>Lifelong learner</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-md p-4 ">
            <span className="bg-red-200 text-red-600 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.728-1.317 5.368l.03.032A9.957 9.957 0 002 14h16c0-1.437-.31-2.872-.91-4.197l.03-.032C16.257 8.128 15.803 6.387 15.803 4.5a6.497 6.497 0 00-1.703-4.5A6.507 6.507 0 0010 0a6.51 6.51 0 00-4.5 1.5A6.491 6.491 0 004 6a6.49 6.49 0 006 6zm0-2a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" />
              </svg>
            </span>
            <span>Teacher</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-md p-4 ">
            <span className="bg-gray-200 text-gray-600 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>Other</span>
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
