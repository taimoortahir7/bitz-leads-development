import React from "react";
import s from "./Para.module.css";

const Para = ({ text }) => {
  function createMarkup() {
    return { __html: `${text}` };
  }
  return (
    <div className="h-auto flex items-center w-full relative mt-4 lg:mt-8">
      <span className={s.text} dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default Para;
