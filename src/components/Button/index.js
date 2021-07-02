import React from "react";
import Link from "next/link";
import Spinner from "components/shared/Spinner";

const Button = ({ isSolid, href, title, isLoading, ...buttonProps }) => {
  return (
    <button {...buttonProps}>
      {isLoading ? (
        <Spinner width="20" fill="#86bc25" className="animate-spin" />
      ) : (
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
      )}
    </button>
  );
};

export default Button;
