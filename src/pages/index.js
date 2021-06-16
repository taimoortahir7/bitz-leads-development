import Layout from "layout";

import {
  Hero,
  Tech,
  Feature,
  Pricing,
  Boosters,
  Footer,
} from "components/containers";

import { FEATURE_DATA } from "data/feature-data";

const Index = () => {
  return (
    <Layout>
      <section className="relative w-full h-screen pt-28 flex">
        <Hero />
      </section>
      <section className="min-h-screen w-full flex relative my-8">
        <Tech />
      </section>
      <section className="min-h-screen w-full flex flex-col relative">
        {FEATURE_DATA.map((feature, index) => (
          <div key={index.toString()}>
            <Feature feature={feature} />
          </div>
        ))}
      </section>
      <section className="h-screen w-full flex relative" id="pricing">
        <Pricing />
      </section>
      <section className="h-screen w-full relative">
        <Boosters />
      </section>
      <section className="w-full relative mt-8" id="contact">
        <Footer />
      </section>
    </Layout>
  );
};
export default Index;
