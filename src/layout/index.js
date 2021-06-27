import { useState } from "react";
import Navbar from "components/Navbar";
import Menu from "components/Menu";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="w-full centered min-h-screen top-0 absolute">
      <Navbar toggle={toggleMenu} />
      <Menu isOpen={menuOpen} />
      {children}
      <div
        className="absolute w-2/4 top-0 right-0 hidden"
        style={{ zIndex: "-1" }}
      >
        <img
          src="/images/bg.png"
          className="object-center absolute w-full inset-0"
        />
      </div>
    </div>
  );
};

export default Layout;
