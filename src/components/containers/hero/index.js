import React from "react";

const Hero = () => {
  return (
    <>
      <div className="left-content relative">
        <div className="text-3xl lg:text-4xl xl:text-5xl  font-semibold leading-10 xl:leading-tight">
          <span className="block text-secondary-500 relative">
            BlitzLeads<sup className="text-sm absolute top-0">®</sup>
          </span>
          Remote prospecting <br />
          Powered by AI
        </div>
        <div className="mt-4 lg:mt-8 text-sm lg:text-base xl:text-lg font-medium relative">
          <span className="mr-2">
            BlitzLeads
            <sup>®</sup>
          </span>
          is built to assist Home-based <br />
          Sales professionals and Teams
        </div>
        <div className="mt-8 lg:mt-8 xl:mt-16 py-4 lg:py-3 xl:py-4 px-6 bg-secondary-500 font-semibold">
          Create Account
        </div>
        <div className="text-xs lg:text-sm xl:text-base font-normal mt-6 lg:mt-6">
          Already a member?
          <span className="ml-2 text-secondary-500 border-b border-solid border-secondary-500">
            Sign in{" "}
            <img
              src="/images/icons/arrow.svg"
              alt=""
              className="relative inline"
            />
            {/* <span className="block w-full relative bg-secondary-500 h-px"></span> */}
          </span>
        </div>
      </div>
      <div className="right-content relative w-full ">
        <div className="relative top-0 h-full w-full flex items-start">
          <div
            className="hidden lg:block relative w-full"
            style={{ height: "75vh" }}
          >
            <span className="absolute w-80 xl:w-96 top-24 xl:top-40 left-44 xl:left-44">
              <img
                src="/images/sections/home/2.jpg"
                className=" object-center object-cover"
              />
            </span>
            <span className="absolute w-64 xl:w-72 top-12 xl:top-24 xl:-left-4">
              <img
                src="/images/sections/home/1.jpg"
                className=" object-center object-cover"
              />
            </span>
            <span className="absolute w-72 xl:w-80 top-72 xl:top-96 -left-8 xl:-left-12">
              <img
                src="/images/sections/home/3.jpg"
                className=" object-center object-cover"
              />
            </span>
            <span className="absolute w-64 xl:w-72 top-64 xl:top-80 left-56 xl:left-60">
              <img
                src="/images/sections/home/4.jpg"
                className=" object-center object-cover"
              />
            </span>
          </div>
          <img
            src="/images/home-mobile.png"
            alt="homepage"
            className="block lg:hidden absolute inset-x-0   mt-10 md:mt-40 lg:my-0"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
