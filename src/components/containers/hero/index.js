import React from "react";

const Hero = () => {
  return (
    <>
      <div className="left-content">
        <div className="text-5xl font-semibold leading-tight">
          <span className="block text-secondary-500">BlitzLeads&reg;</span>
          Remote prospecting <br />
          Powered by AI
        </div>
        <div className="mt-8 text-lg font-normal">
          BlitzLeads&reg; is built to assist Home-based <br />
          Sales professionals and Teams
        </div>
        <div className="mt-16 py-4 px-6 bg-secondary-500 font-medium">
          Create Account
        </div>
        <div className="text-base mt-8">
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
      </div>{" "}
      <div className="right-content">
        <img src="/images/home-normal.png" alt="homepage" />
      </div>{" "}
    </>
  );
};

export default Hero;
