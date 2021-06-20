import Navbar from "components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container centered min-h-screen">
      <Navbar />
      {children}
      <div className="absolute w-2/4 top-0 right-0" style={{ zIndex: "-1" }}>
        <img
          src="/images/bg.png"
          className="object-center absolute w-full inset-0"
        />
      </div>
    </div>
  );
};

export default Layout;
