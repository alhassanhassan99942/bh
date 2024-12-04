import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
        {!title ? "Training we offer" : title}
      </h2>
      <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
        {!subtitle
          ? "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis."
          : subtitle}
      </p>
      <div class="w-30 h-1 rounded-full bg-blue-600 inline-flex"></div>
    </div>
  );
};

export default Title;
