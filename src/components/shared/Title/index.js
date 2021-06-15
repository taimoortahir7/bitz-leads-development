import React from "react";

const Title = ({ content }) => {
  return (
    <div className="flex items-center justify-start">
      <div className="text-4xl">{content}</div>
      <div className="w-12 h-0 border border-solid border-secondary-500 ml-8" />
    </div>
  );
};

export default Title;
