import Layout from "layout";

import { Hero, Tech } from "components/containers";

const Index = () => {
	return (
		<Layout>
			<section className="relative w-full h-screen pt-28 flex">
				<Hero />
			</section>
			<section className="h-screen w-full flex relative">
				<Tech />
			</section>
		</Layout>
	);
};
export default Index;
