import Link from "next/link";
import React from "react";

const NAV_LINKS = [
  {
    name: "pricing",
    path: "#pricing",
    border: false,
  },
  {
    name: "contact",
    path: "#contact",
    border: true,
  },
];

const Navbar = () => {
  return (
    <div className="absolute container flex items-center justify-between px-8 xl:px-16 py-4 mt-0 lg:mt-4 z-50">
      <div className="">
        <img
          src="/images/logo.png"
          alt="logo"
          className="object-contain object-center w-10 lg:w-14"
        />
      </div>
      <div className="w-1/4 relative lg:flex items-center justify-end hidden">
        <NavItem path="#pricing" name="Pricing" />
        <NavItem border path="#contact" name="Contact" />
      </div>
      <div className="w-1/4 relative flex items-center justify-end lg:hidden space-x-3">
        <div>
          <img
            src="/images/icons/contact-icon.png"
            alt="contact"
            className="object-cover object-center w-8"
          />
        </div>
        <div>
          <img
            src="/images/icons/menu-icon.png"
            alt="contact"
            className="object-cover object-center w-8"
          />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ border, path, name }) => {
  return (
    <div
      className={` px-6 py-2 text-base font-semibold  ${
        border ? "border border-solid border-secondary-500" : ""
      }`}
    >
      <Link href={path ? path : "#"}>{name}</Link>{" "}
    </div>
  );
};
export default Navbar;
