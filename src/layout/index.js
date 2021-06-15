import Navbar from "components/Navbar";

const Layout = ({ children }) => {
	return (
		<div className="container mx-auto min-h-screen">
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
