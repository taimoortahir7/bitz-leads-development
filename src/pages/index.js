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
      <section className="relative w-full  pt-16 landscape:pt-14 lg:pt-28 flex px-8 lg:px-8 xl:px-16 flex-col landscape:flex-row lg:items-center ">
        <Hero />
      </section>
      <section className="min-h-full w-full flex flex-col lg:flex-row relative ">
        <Tech />
      </section>
      <section className=" w-full flex flex-col relative">
        {FEATURE_DATA.map((feature, index) => (
          <div
            key={index.toString()}
            id={feature.id}
            className="h-screen my-8 lg:my-0 relative"
          >
            <Feature feature={feature} />
          </div>
        ))}
      </section>
      <section className="min-h-full w-full flex relative" id="pricing">
        <Pricing />
      </section>
      <section className="min-h-full w-full relative">
        <Boosters />
      </section>
      <section className="min-h-full w-full relative mt-4 mb-0" id="contact">
        <Footer />
      </section>
    </Layout>
  );
};
export default Index;
