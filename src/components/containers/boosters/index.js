import React from "react";
import Title from "components/shared/Title";
import { BOOSTER_DATA } from "data/booster-data";

const Boosters = () => {
  return (
    <div className=" h-full px-16">
      <Title content="Booster Packs" />
      <div className="flex items-center mt-16">
        <div className="left-content">
          <img src="/images/booster.png" />
        </div>
        <div className="right-content">
          <div className="grid grid-cols-3 gap-16">
            {BOOSTER_DATA.map((item, index) => (
              <React.Fragment key={index.toString()}>
                <BoosterItem price={item.price} leads={item.leads} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BoosterItem = ({ price, leads }) => {
  return (
    <div className="relative flex flex-col items-center justify-center transform scale-100 hover:scale-105 transition-all ease-out duration-100">
      <div className="text-3xl font-semibold ">{price}</div>
      <div className="text-base font-normal mt-2">{`${leads} Leads`}</div>
      <div className="h-0 w-full border border-solid border-secondary-500"></div>
    </div>
  );
};
export default Boosters;
