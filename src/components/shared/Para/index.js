import React from "react";
import s from "./Para.module.css";

const Para = ({ text }) => {
  return (
    <div className="h-auto flex items-center w-72 lg:w-4/6 relative mt-4 lg:mt-8">
      <span className={s.text}>{text} </span>
    </div>
  );
};

export default Para;
