import React from "react";

const Hero = () => {
  return (
    <>
      <div className="left-content">
        <div className="text-3xl lg:text-5xl font-semibold leading-tight">
          <span className="block text-secondary-500 relative">
            BlitzLeads<span className="text-sm absolute top-0">®</span>
          </span>
          Remote prospecting <br />
          Powered by AI
        </div>
        <div className="mt-2 lg:mt-8 text-sm lg:text-lg font-normal">
          BlitzLeads&reg; is built to assist Home-based <br />
          Sales professionals and Teams
        </div>
        <div className="mt-4 lg:mt-16 py-4 px-6 bg-secondary-500 font-medium">
          Create Account
        </div>
        <div className="text-xs lg:text-base mt-4 lg:mt-8">
          Already a member?
          <span className="ml-2 text-secondary-500">
            Sign in{" "}
            <img
              src="/images/icons/Vector.png"
              alt=""
              className="relative inline"
            />
          </span>
        </div>
      </div>
      <div className="right-content relative w-full  my-8 lg:my-0">
        <img
          src="/images/home-normal.png"
          alt="homepage"
          className="hidden lg:block"
        />
        <img
          src="/images/home-mobile.png"
          alt="homepage"
          className="block lg:hidden"
        />
      </div>
    </>
  );
};

export default Hero;
