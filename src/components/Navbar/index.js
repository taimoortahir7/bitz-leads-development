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

const Navbar = ({ toggle }) => {
  return (
    <div className="absolute w-full flex items-center justify-between px-8 xl:px-16 py-4 lg:py-4 mt-0 lg:mt-4 z-50">
      <Link href="/">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="object-contain object-center w-8 lg:w-12 "
        />
      </Link>
      <div className="w-2/4 relative lg:flex items-center justify-end hidden">
        <NavItem path="/#pricing" name="Pricing" />
        <NavItem border path="/#contact" name="Contact" />
      </div>
      <div className="w-1/4 relative flex items-center justify-end lg:hidden space-x-3">
        <div>
          <a href="#contact">
            <img
              src="/images/icons/contact-icon.svg"
              alt="contact"
              className="object-cover object-center w-8"
            />
          </a>
        </div>
        <div onClick={() => toggle()} className="cursor-pointer">
          <img
            src="/images/icons/menu-icon.svg"
            alt="contact"
            className="object-cover  object-center w-8"
          />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ border, path, name }) => {
  return (
    <div
      className={` px-6 py-2 text-sm lg:text-base font-semibold  ${
        border ? "border border-solid border-secondary-500" : ""
      }`}
    >
      <Link href={path ? path : "#"}>{name}</Link>{" "}
    </div>
  );
};
export default Navbar;
