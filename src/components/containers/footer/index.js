import React from "react";

const Footer = () => {
  return (
    <div className="px-16 py-8 grid sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col items-start justify-start">
        <img
          src="/images/logo.png"
          alt="logo"
          className="object-center object-contain"
        />
        <div className="text-sm font-normal mt-4">
          &copy;{new Date().getFullYear()} BlitzLeads&reg; All rights reserved.
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="sm:text-sm lg:text-base font-semibold mt-4">Press</div>
        <div className="sm:text-sm lg:text-base font-semibold mt-4">Blog</div>
        <div className="sm:text-sm lg:text-base font-semibold mt-4">
          Inverstors
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="sm:text-sm lg:text-base font-semibold mt-4">
          Privacy Policy
        </div>
        <div className="sm:text-sm lg:text-base font-semibold mt-4">
          Terms &amp; conditions
        </div>
        <div className="sm:text-sm lg:text-base font-semibold mt-4 flex space-x-8">
          <img src="/images/icons/facebook.png" alt="facebook" />
          <img src="/images/icons/insta.png" alt="instagram" />
          <img src="/images/icons/twitter.png" alt="twitter" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="sm:text-sm lg:text-base font-semibold mt-4">
          help@blitzleads.ai
        </div>
        <div className="sm:text-sm lg:text-base font-normal mt-4">
          BlitzLeads
          <br />
          6918 Corporate Drive
          <br />
          Houston TX 77036
        </div>
      </div>
    </div>
  );
};

export default Footer;
