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
		<div className="absolute container flex items-center justify-between px-2 py-4 mt-4 z-50">
			<div className="">
				<img
					src="/images/logo.png"
					alt="logo"
					className="object-contain object-center w-full h-16"
				/>
			</div>
			<div className="w-1/4 relative flex items-center justify-center">
				<NavItem path="#pricing" name="Pricing" />
				<NavItem border path="#contact" name="Contact" />
			</div>
		</div>
	);
};

const NavItem = ({ border, path, name }) => {
	return (
		<div
			className={` px-6 py-2  ${
				border ? "border border-solid border-secondary-500" : ""
			}`}
		>
			<Link href={path ? path : "#"}>{name}</Link>{" "}
		</div>
	);
};
export default Navbar;
