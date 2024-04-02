import React from "react";

const LearningPaths = () => {
  const paths = [
    {
      id: 1,
      title: "Foundational Math Build",
      description:
        "Build your foundational skills in algebra, geometry, and probability.",
      imageUrl: "https://thumbs.dreamstime.com/b/computer-system-442421.jpg",
      isPopular: true,
    },
    {
      id: 2,
      title: "Mathematical Thinking",
      description:
        "Build your foundational skills in algebra, geometry, and probability.",
      imageUrl: "https://thumbs.dreamstime.com/b/computer-system-442421.jpg",
      isPopular: false,
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
          Learning paths based on your answers
        </h2>
        <p className="text-center text-lg text-gray-500 mb-8">
          Choose one to get started. You can switch anytime.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paths.map((path) => (
            <div
              key={path.id}
              className="bg-white overflow-hidden shadow rounded-lg relative group"
            >
              <div className="px-6 py-8 sm:p-6">
                <div className="relative">
                  <img
                    src={path.imageUrl}
                    alt={path.title}
                    className="w-20 h-20 rounded-lg"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {path.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {path.description}
                  </p>
                </div>
                {path.isPopular && (
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 rounded-bl-lg font-semibold">
                    Most Popular
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPaths;
