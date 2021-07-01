import React from "react";
import Link from "next/link";

const Button = ({ isSolid, href, title }) => {
  return (
    <Link href={href ? href : "#"}>
      <a
        className={`${
          isSolid
            ? "border-none bg-secondary-500"
            : " border border-secondary-500 border-solid"
        } px-6 py-2 my-2 w-full text-center text-sm lg:text-normal cursor-pointer`}
      >
        <span>{title}</span>
      </a>
    </Link>
  );
};

export default Button;
