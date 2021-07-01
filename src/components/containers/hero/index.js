import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="left-content relative justify-start">
        <div className="text-2xl landscape:text-2xl sm:text-3xl xs:text-3xl lg:text-4xl xl:text-5xl  font-semibold leading-tight landscape:leading-none xs:leading-10 xl:leading-tight">
          <span className="block text-secondary-500 relative">
            BlitzLeads<sup className="text-sm absolute top-0">®</sup>
          </span>
          Remote prospecting <br />
          Powered by AI
        </div>
        <div className="mt-2 xs:mt-4 landscape:mt-2 lg:mt-8 text-xs xs:text-sm sm:text-sm landscape:text-xs lg:text-base xl:text-lg landscape:text-xs font-medium relative">
          <span className="mr-2">
            BlitzLeads
            <sup>®</sup>
          </span>
          is built to assist Home-based <br />
          Sales professionals and Teams
        </div>
        <Link href="/auth/signup">
          <div className=" cursor-pointer text-xs sm:text-sm landscape:text-xs xs:text-base mt-2 xs:mt-4 landscape:mt-4 lg:mt-8 xl:mt-16 py-3 xs:py-4 lg:py-3 xl:py-4 px-6 bg-secondary-500 font-semibold">
            Create Account
          </div>
        </Link>
        <div className="text-xs lg:text-sm xl:text-base font-normal mt-2 landscape:mt-4 lg:mt-6">
          Already a member?
          <Link href="/auth/login">
            <span className=" cursor-pointer ml-2 text-secondary-500 border-b border-solid border-secondary-500">
              Sign in
              <img
                src="/images/icons/arrow.svg"
                alt=""
                className="relative inline"
              />
              {/* <span className="block w-full relative bg-secondary-500 h-px"></span> */}
            </span>
          </Link>
        </div>
      </div>
      <div className="right-content relative w-full ">
        <div className="relative top-0 lg:h-full w-full flex items-start hero--right">
          <div className="hidden lg:block relative w-full">
            <span className="absolute w-72 xl:w-96 top-16 xl:top-28 left-44 xl:left-44">
              <img
                src="/images/sections/home/2.jpg"
                className=" object-center object-cover"
              />
            </span>
            <span className="absolute w-56 xl:w-72 top-4 xl:top-12 xl:-left-4 border-2 border-solid border-black">
              <img
                src="/images/sections/home/1.png"
                className=" object-center object-cover"
              />
            </span>
            <span className="absolute w-60 xl:w-80 top-56 xl:top-80 -left-8 xl:-left-12">
              <img
                src="/images/sections/home/3.jpg"
                className=" object-center object-cover"
              />
            </span>
            <span className="absolute w-52 xl:w-72 top-48 xl:top-72 left-48 xl:left-60">
              <img
                src="/images/sections/home/4.jpg"
                className=" object-center object-cover"
              />
            </span>
          </div>
          <img
            src="/images/home-mobile.png"
            alt="homepage"
            className="block lg:hidden absolute inset-x-0 landscape:pl-4 lg:pl-0 mt-4  xs:mt-10 landscape:mt-0 md:mt-40 lg:my-0"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
