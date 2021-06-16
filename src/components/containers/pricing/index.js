import Title from "components/shared/Title";

import { PRICING_DATA } from "data/pricing-data";

const Pricing = () => {
  return (
    <div className="w-full flex flex-col items-start justify-center px-16">
      <Title content="Pricing" />
      <div className="w-full grid md:grid-cols-3  lg:grid-cols-5 gap-8 auto-rows-auto mt-16">
        {PRICING_DATA.map((data, index) => (
          <div
            key={index.toString()}
            className="transform h-64 border border-solid border-b-8 border-secondary-500 flex flex-col items-center justify-center px-4 transition-all ease-out duration-100 hover:border-secondary-100 hover:scale-105"
          >
            <div className="sm:text-3xl lg:text-4xl font-bold text-center">
              {data.amount}
            </div>
            <div className="sm:text-sm lg:text-base font-normal text-center">
              {data.desc}
            </div>
            <div className="sm:text-base lg:text-lg font-normal mt-11 font-semibold text-center">
              {data.leads}
              {" Leads"}
            </div>
            <div className="sm:text-xs lg:text-base font-normal text-center mt-4">
              {data.contract_period}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
