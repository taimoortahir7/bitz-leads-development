import React from "react";

const Title = ({ content }) => {
  return (
    <div className="flex items-center justify-start">
      <div className="text-xl lg:text-4xl font-semibold">{content}</div>
      <div className="w-8 lg:w-12 h-0 border border-solid border-secondary-500 ml-2 xl:ml-4" />
    </div>
  );
};

export default Title;
