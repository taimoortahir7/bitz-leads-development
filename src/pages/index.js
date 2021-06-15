import Layout from "layout";

import { Hero, Tech, Feature } from "components/containers";

import { FEATURE_DATA } from "data/feature-data";

const Index = () => {
  return (
    <Layout>
      <section className="relative w-full h-screen pt-28 flex">
        <Hero />
      </section>
      <section className="h-screen w-full flex relative">
        <Tech />
      </section>
      <section className="h-screen w-full flex flex-col relative">
        {FEATURE_DATA.map((feature, index) => (
          <div key={index.toString()}>
            <Feature feature={feature} />
          </div>
        ))}
      </section>
    </Layout>
  );
};
export default Index;
