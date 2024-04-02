import React from "react";

const ImageTextComponent = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center p-8 mt-20">
      <div className="text-center sm:mr-20 sm:ml-20 mb-8 sm:mb-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6A8t5NEDcY1K7IvQ-NRfPeR6XymmVHREFUf2yNO6QxDnlQpw_6YXmt68Uap7nLB3jQY&usqp=CAU"
          alt="Image"
          className="max-w-xs"
        />
      </div>
      <div className="text-center sm:ml-40 sm:mr-40">
        <h2 className="text-2xl font-bold mb-4">You're in the right place</h2>
        <p className="mb-6">
          Brilliant gets you hands-on to help improve your professional skills
          and knowledge. You'll interact with concepts and solve fun problems in
          math, science, and computer science.
        </p>
        <div className="flex justify-center items-center mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageTextComponent;
