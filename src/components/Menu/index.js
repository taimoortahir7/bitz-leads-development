import React from "react";
import Button from "components/Button";

const Menu = ({ isOpen }) => {
  return (
    <div
      className={`translate-x-${
        isOpen ? 0 : "full"
      }  absolute flex lg:hidden transform origin-right transition-transform duration-300 ease-in-out right-0 top-0 h-screen w-9/12 bg-black border-l-2 border-secondary-500 border-solid z-40 items-start justify-center px-4 flex-col`}
    >
      <Button isSolid title="Register" />
      <Button title="Log In" />
    </div>
  );
};

export default Menu;
