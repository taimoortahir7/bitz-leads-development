import React from "react";

const Button = ({ isSolid, href, title }) => {
  return (
    <a
      href={href ? href : "#"}
      className={`${
        isSolid
          ? "border-none bg-secondary-500"
          : " border border-secondary-500 border-solid"
      } px-6 py-2 my-2 w-full text-center text-sm lg:text-normal`}
    >
      <span>{title}</span>
    </a>
  );
};

export default Button;
