import React from "react";
import Button from "components/Button";

const Menu = ({ isOpen }) => {
  return (
    <div
      className={
        (isOpen ? "translate-x-0" : "translate-x-full") +
        " fixed flex lg:hidden transform-gpu origin-right transition-all duration-300 ease-in-out right-0 top-0 h-screen w-72 bg-black border-l-2 border-secondary-500 border-solid z-40 items-start justify-center px-4 flex-col"
      }
    >
      <Button isSolid title="Register" />
      <Button title="Log In" />
    </div>
  );
};

export default Menu;
