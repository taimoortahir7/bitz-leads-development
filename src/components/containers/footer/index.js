import React from "react";

const Footer = () => {
  return (
    <div className="px-8 xl:px-16 py-4 flex flex-col items-center justify-center lg:grid  lg:grid-cols-4">
      <MobileFooter />
      <div className="w-full flex flex-row-reverse lg:flex-col items-end lg:items-start justify-between xl:justify-start">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="object-contain object-center w-8 lg:w-12"
        />
        {/* desktop */}
        <div className="text-xs xl:text-sm mt-3 font-normal hidden lg:block pr-4 lg:pr-0 relative">
          &copy;{new Date().getFullYear()}&nbsp;
          <span className="mr-2">
            BlitzLeads
            <sup>®</sup>
          </span>
          All rights reserved.
        </div>
        {/* mobile */}
        <div
          className=" lg:text-sm font-normal block lg:hidden pr-4 lg:pr-0 text-left"
          style={{ fontSize: "10px" }}
        >
          <div className="">
            BlitzLeads 6918 Corporate Drive Houston TX 77036
          </div>
          &copy;{new Date().getFullYear()} BlitzLeads&reg; All rights reserved.
        </div>
      </div>
      <DesktopFooter />
    </div>
  );
};
const MobileFooter = () => (
  <>
    <div className="flex flex-row visible lg:hidden mb-4 w-full justify-between">
      <img
        src="/images/booster-mobile.png"
        className="w-48 object-cover object-center"
      />
      <div className="flex flex-col space-y-2 text-right">
        <div className="text-xs lg:text-base font-normal">Press</div>
        <div className="text-xs lg:text-base font-normal ">Blog</div>
        <div className="text-xs lg:text-base font-normal ">Investors</div>
        <div className="text-xs lg:text-base font-normal ">Privacy Policy</div>
        <div className="text-xs lg:text-base font-normal ">
          Terms &amp; conditions
        </div>
        <div className="text-xs lg:text-base font-normal ">
          help@blitzleads.ai
        </div>
        <div className="sm:text-sm lg:text-base font-normal  flex items-end justify-end space-x-4">
          <img
            src="/images/icons/facebook.png"
            alt="facebook"
            className="w-3 h-3 object-contain object-center"
          />
          <img
            src="/images/icons/insta.png"
            alt="instagram"
            className="w-3 h-3 object-contain object-center"
          />
          <img
            src="/images/icons/twitter.png"
            alt="twitter"
            className="w-3 h-3 object-contain object-center"
          />
        </div>
      </div>
    </div>
  </>
);
const DesktopFooter = () => (
  <>
    <div className="lg:flex flex-col lg:pl-8 items-start justify-center hidden">
      <div className="text-sm xl:text-base font-semibold mt-0">Press</div>
      <div className="text-sm xl:text-base font-semibold mt-4">Blog</div>
      <div className="text-sm xl:text-base font-semibold mt-4">Investors</div>
    </div>

    <div className="lg:flex flex-col lg:pl-4 items-start justify-center hidden">
      <div className="text-sm xl:text-base font-semibold mt-0">Policy</div>
      <div className="text-sm xl:text-base font-semibold mt-4">User Terms</div>
      <div className="sm:text-sm xl:text-base font-semibold mt-4 flex space-x-6 items-center justify-around">
        {/* <img src="/images/icons/facebook.png" alt="facebook" /> */}
        <span>
          <svg
            width="13"
            height="25"
            viewBox="0 0 13 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1481 13.6533L12.8222 9.26052H8.60725V6.40993C8.60725 5.20816 9.19605 4.03672 11.0838 4.03672H13V0.296769C13 0.296769 11.2611 0 9.59853 0C6.12738 0 3.85847 2.10393 3.85847 5.91263V9.26052H0V13.6533H3.85847V24.2725H8.60725V13.6533H12.1481Z"
              fill="white"
            />
          </svg>
        </span>
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0027 5.8454C8.59743 5.8454 5.85075 8.59208 5.85075 11.9973C5.85075 15.4026 8.59743 18.1492 12.0027 18.1492C15.4079 18.1492 18.1546 15.4026 18.1546 11.9973C18.1546 8.59208 15.4079 5.8454 12.0027 5.8454ZM12.0027 15.9969C9.80212 15.9969 8.00312 14.2032 8.00312 11.9973C8.00312 9.79141 9.79677 7.99777 12.0027 7.99777C14.2086 7.99777 16.0022 9.79141 16.0022 11.9973C16.0022 14.2032 14.2032 15.9969 12.0027 15.9969ZM19.8412 5.59375C19.8412 6.39152 19.1987 7.02867 18.4062 7.02867C17.6085 7.02867 16.9713 6.38617 16.9713 5.59375C16.9713 4.80134 17.6138 4.15884 18.4062 4.15884C19.1987 4.15884 19.8412 4.80134 19.8412 5.59375ZM23.9157 7.05008C23.8247 5.12794 23.3856 3.42532 21.9775 2.02253C20.5747 0.619743 18.8721 0.180703 16.9499 0.0843279C14.9689 -0.0281093 9.03112 -0.0281093 7.05008 0.0843279C5.1333 0.175349 3.43068 0.614389 2.02253 2.01718C0.614389 3.41997 0.180703 5.12259 0.0843279 7.04473C-0.0281093 9.02577 -0.0281093 14.9635 0.0843279 16.9446C0.175349 18.8667 0.614389 20.5693 2.02253 21.9721C3.43068 23.3749 5.12794 23.8139 7.05008 23.9103C9.03112 24.0228 14.9689 24.0228 16.9499 23.9103C18.8721 23.8193 20.5747 23.3803 21.9775 21.9721C23.3803 20.5693 23.8193 18.8667 23.9157 16.9446C24.0281 14.9635 24.0281 9.03112 23.9157 7.05008ZM21.3564 19.0702C20.9388 20.1196 20.1303 20.9281 19.0755 21.351C17.496 21.9775 13.7481 21.8329 12.0027 21.8329C10.2572 21.8329 6.50396 21.9721 4.92984 21.351C3.88042 20.9334 3.07195 20.1249 2.64897 19.0702C2.02253 17.4907 2.16709 13.7428 2.16709 11.9973C2.16709 10.2519 2.02789 6.49861 2.64897 4.92448C3.06659 3.87507 3.87507 3.06659 4.92984 2.64361C6.50931 2.01718 10.2572 2.16174 12.0027 2.16174C13.7481 2.16174 17.5014 2.02253 19.0755 2.64361C20.1249 3.06124 20.9334 3.86972 21.3564 4.92448C21.9828 6.50396 21.8383 10.2519 21.8383 11.9973C21.8383 13.7428 21.9828 17.496 21.3564 19.0702Z"
              fill="white"
            />
          </svg>
        </span>
        <span>
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5331 4.85786C21.5483 5.07105 21.5483 5.28429 21.5483 5.49747C21.5483 12 16.5991 19.4924 7.55333 19.4924C4.7665 19.4924 2.17768 18.6853 0 17.2843C0.395955 17.33 0.776628 17.3452 1.18782 17.3452C3.48728 17.3452 5.60407 16.5686 7.29444 15.2437C5.13199 15.198 3.31979 13.7818 2.69542 11.8325C3.00001 11.8782 3.30456 11.9086 3.62439 11.9086C4.066 11.9086 4.50766 11.8477 4.9188 11.7412C2.66499 11.2843 0.974582 9.30458 0.974582 6.91371V6.85282C1.62938 7.21831 2.39087 7.44673 3.19792 7.47715C1.87304 6.59388 1.00505 5.08629 1.00505 3.38069C1.00505 2.46699 1.24866 1.62943 1.67508 0.898457C4.09642 3.88323 7.73605 5.83245 11.8172 6.04568C11.7411 5.68019 11.6954 5.29952 11.6954 4.9188C11.6954 2.2081 13.8883 0 16.6142 0C18.0304 0 19.3096 0.593909 20.2081 1.5533C21.3198 1.34011 22.3858 0.928926 23.33 0.365486C22.9644 1.50765 22.1878 2.46704 21.1675 3.07614C22.1574 2.96959 23.1168 2.69542 24 2.31474C23.3301 3.28933 22.4924 4.15731 21.5331 4.85786Z"
              fill="white"
            />
          </svg>
        </span>
        {/* <img src="/images/icons/insta.png" alt="instagram" /> */}
        {/* <img src="/images/icons/twitter.png" alt="twitter" /> */}
      </div>
    </div>

    <div className="lg:flex flex-col lg:pl-14 items-start justify-center hidden">
      <div className="text-sm xl:text-base font-semibold mt-0">
        help@blitzleads.ai
      </div>
      <div className="text-sm xl:text-base font-normal mt-4">
        BlitzLeads
        <br />
        6918 Corporate Drive
        <br />
        Houston TX 77036
      </div>
    </div>
  </>
);
export default Footer;
