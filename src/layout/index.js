import { useState, useRef, useEffect } from "react";
import Navbar from "components/Navbar";
import Menu from "components/Menu";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const main = useRef();
  useEffect(() => {
    menuOpen ? disableBodyScroll(main.current) : enableBodyScroll(main.current);
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [menuOpen]);
  const toggleMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };
  return (
    <div className="w-full centered min-h-screen top-0 absolute" ref={main}>
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
