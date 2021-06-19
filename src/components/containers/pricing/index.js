import { useState, useEffect } from "react";
import Title from "components/shared/Title";
import DropDown from "../../Dropdown";

import { PRICING_DATA } from "data/pricing-data";

const Pricing = () => {
  const [optionValue, setOptionValue] = useState();
  useEffect(() => {
    console.log(optionValue);
    return () => {};
  }, [optionValue]);

  return (
    <div className="w-full flex flex-col items-start justify-center px-8 mt-8 mb-16 xl:px-16">
      <Title content="Pricing" />
      <PricingMobile setValue={setOptionValue} />
      <PricingDesktop />
    </div>
  );
};
const PricingMobile = ({ setValue }) => (
  <div className="w-full flex flex-col items-center justify-start lg:hidden">
    <DropDown color="teal" data={PRICING_DATA} setValue={setValue} />
    <div
      className="mt-4 lg:mt-16 py-2 px-3 bg-secondary-500 font-medium"
      style={{ maxWidth: "150px" }}
    >
      Choose Package
    </div>
  </div>
);
const PricingDesktop = () => (
  <div className="w-full hidden lg:grid lg:grid-cols-3  lg:grid-cols-5 gap-8 auto-rows-auto mt-16">
    {PRICING_DATA.map((data, index) => (
      <div
        key={index.toString()}
        className="transform lg:h-52 xl:h-64 border border-solid border-b-8 border-secondary-500 flex flex-col items-center justify-center px-4 transition-all ease-out duration-100 hover:border-secondary-100 hover:scale-105"
      >
        <div className="text-3xl xl:text-4xl font-bold text-center">
          {data.amount}
        </div>
        <div className="text-sm xl:text-base font-normal text-center">
          {data.desc}
        </div>
        <div className="text-base xl:text-lg font-normal mt-11 font-semibold text-center">
          {data.leads}
          {" Leads"}
        </div>
        <div className="sm:text-xs xl:text-base font-normal text-center mt-4">
          {data.contract_period}
        </div>
      </div>
    ))}
  </div>
);

export default Pricing;
