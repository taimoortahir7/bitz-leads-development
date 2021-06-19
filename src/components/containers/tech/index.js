import Title from "components/shared/Title";

const Tech = () => {
  return (
    <>
      <div className="left-content">
        <Title content="The Technology" />
        <div className="relative w-4/5 h-2/5 mt-28 hidden lg:block">
          <img
            src="/images/tech.png"
            alt="the technology"
            className="object-contain object-center invisible lg:visible"
          />
        </div>
      </div>
      <div className="right-content">
        <div className="mt-4 text-normal lg:text-base xl:text-xl font-normal lg:mt-40">
          BlitzLeads® is an Automated Lead Generation solution for:
        </div>
        <div className="text-normal lg:text-base xl:text-xl font-semibold mt-4 lg:mt-8">
          <div className="ml-12 lg:ml-2">
            <img
              src="/images/icons/Vector.png"
              alt=""
              className="relative inline mr-2 lg:mr-4"
            />
            Home-based Sales Producers
          </div>
          <div className="ml-12 lg:ml-2">
            <img
              src="/images/icons/Vector.png"
              alt=""
              className="relative inline mr-2 lg:mr-4"
            />
            Small Businesses and Teams
          </div>
        </div>
        <div className="mt-2 lg:mt-8 text-normal lg:text-base xl:text-xl font-normal">
          Leading with metrics,BlitzLeads® provides fully automated
          <br /> Business Development capacity, acting as a mobile force
          <br /> multiplier. Remote Revenue Generation and every stage of
          <br /> the Sales pipeline are addressed through simplified
          <br /> functionality.
        </div>
        <div className="mt-16 relative flex flex-row flex-wrap lg:flex-nowrap justify-center items-center space-x-3">
          <img
            src="/images/icons/Group 25.png"
            alt="generate leads"
            className="object-center object-cover w-20 lg:w-20 xl:w-28"
          />
          <img
            src="/images/icons/Group 30.png"
            alt="engage prospects"
            className="object-center object-cover w-20 lg:w-20 xl:w-28"
          />
          <img
            src="/images/icons/Group 31.png"
            alt="manage sales"
            className="object-center object-cover w-20 lg:w-20 xl:w-28"
          />
          <img
            src="/images/icons/Group 32.png"
            alt="negotiate prices"
            className="object-center object-cover mt-4 lg:mt-0 w-20 lg:w-20 xl:w-28"
          />
          <img
            src="/images/icons/Group 33.png"
            alt="measure performance"
            className="object-center object-cover mt-4 lg:mt-0 w-20 lg:w-20 xl:w-28"
          />
        </div>
      </div>{" "}
    </>
  );
};

const Card = ({ src, text }) => {
  return (
    <div className="relative flex items-center justify-center flex-col">
      <img src="/images/Border.png" alt="border" className="absolute" />
      <img src={src} alt="ico" />
      <div className="w-2/4 text-center">{text}</div>
    </div>
  );
};

export default Tech;
