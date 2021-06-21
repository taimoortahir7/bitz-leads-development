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
      <div className="right-content relative w-full  my-10 lg:my-0">
        <div>
          <img
            src="/images/home-normal.png"
            alt="homepage"
            className="hidden lg:block"
          />
          <img
            src="/images/home-mobile.png"
            alt="homepage"
            className="block lg:hidden absolute inset-x-0"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
