import Title from "components/shared/Title";

const Tech = () => {
  return (
    <>
      <div className="left-content">
        <Title content="The Technology" />
        <div className="relative  w-3/5 mt-28 hidden lg:block">
          <div className=" relative ">
            <div className="absolute h-3/4 w-5/6 bottom-0 left-0 bg-secondary-500" />
            <img
              src="/images/tech-2.jpg"
              className="hidden lg:block object-center object-cover relative -top-4 left-4"
            />
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="mt-4 text-normal lg:text-base xl:text-xl font-normal lg:mt-40 relative">
          <span className=" mr-2">
            BlitzLeads
            <sup>®</sup>
          </span>
          is an Automated Lead Generation solution for:
        </div>
        <div className="text-normal lg:text-base xl:text-xl font-semibold mt-4 lg:mt-6">
          <div className="ml-12 lg:ml-2">
            <img
              src="/images/icons/arrow.svg"
              alt=""
              className="relative inline mr-2 lg:mr-4"
            />
            Home-based Sales Producers
          </div>
          <div className="ml-12 lg:ml-2">
            <img
              src="/images/icons/arrow.svg"
              alt=""
              className="relative inline mr-2 lg:mr-4"
            />
            Small Businesses and Teams
          </div>
        </div>
        <div className="mt-2 lg:mt-6 text-normal lg:text-base xl:text-xl font-normal relative">
          Leading with metrics,{" "}
          <span className=" mr-2">
            BlitzLeads
            <sup>®</sup>
          </span>
          provides fully automated
          <br /> Business Development capacity, acting as a mobile force
          <br /> multiplier. Remote Revenue Generation and every stage of
          <br /> the Sales pipeline are addressed through simplified
          <br /> functionality.
        </div>
        <div className="mt-16 xl:mt-8 relative flex flex-row flex-wrap lg:flex-nowrap justify-center items-center space-x-3">
          <a href="#generate-leads">
            <img
              src="/images/features/Group 25.svg"
              alt="generate leads"
              className="object-center object-cover w-20 lg:w-20 xl:w-28"
            />
          </a>
          <a href="#engage-prospects">
            <img
              src="/images/features/Group 30.svg"
              alt="engage prospects"
              className="object-center object-cover w-20 lg:w-20 xl:w-28"
            />
          </a>
          <a href="#manage-sales">
            <img
              src="/images/features/Group 31.svg"
              alt="manage sales"
              className="object-center object-cover w-20 lg:w-20 xl:w-28"
            />
          </a>
          <a href="#negotiate-prices">
            <img
              src="/images/features/Group 32.svg"
              alt="negotiate prices"
              className="object-center object-cover mt-4 lg:mt-0 w-20 lg:w-20 xl:w-28"
            />
          </a>
          <a href="#measure-performamce">
            <img
              src="/images/features/Group 33.svg"
              alt="measure performance"
              className="object-center object-cover mt-4 lg:mt-0 w-20 lg:w-20 xl:w-28"
            />
          </a>
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
