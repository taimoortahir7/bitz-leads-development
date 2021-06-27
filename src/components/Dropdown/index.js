import React from "react";
import { createPopper } from "@popperjs/core";

const Dropdown = ({ color, data, setValue }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(0);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 0],
          },
        },
        {
          name: "flip",
          options: {
            fallbackPlacements: ["top", "right"],
          },
        },
      ],
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const handleOptionSelect = (e, index) => {
    e.preventDefault();
    setSelectedItem(index);
    closeDropdownPopover();
    setValue(index);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-secondary-500")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap w-full my-4 ">
        <div className="w-full ">
          <div className="relative  align-middle w-full">
            <button
              className={
                "flex items-center justify-between text-white text-left font-bold text-sm px-4 py-2 shadow black border border-solid border-secondary-500 w-full"
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <div>
                <span>
                  {`${data[selectedItem].amount} ${data[selectedItem].desc} - ${data[selectedItem].leads} Leads`}
                </span>
                <span className="font-normal sm:inline block">
                  <span className="sm:inline hidden">{" - "}</span>
                  {data[selectedItem].contract_period}
                </span>
              </div>
              <img src="/images/down-arrow.svg" alt="arrow" />
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "text-base z-50 float-left list-none text-left shadow-lg mt-1 bg-black w-full border border-solid border-secondary-500"
              }
              style={{ minWidth: "12rem" }}
            >
              {data?.map((item, index) => (
                <a
                  href="#"
                  className={
                    "font-bold text-sm py-2 px-4 text-white font-normal block w-full whitespace-nowrap border border-solid border-secondary-500"
                  }
                  onClick={(e) => handleOptionSelect(e, index)}
                  key={index.toString()}
                >
                  <span>
                    {`${item.amount} ${item.desc} - ${item.leads} Leads`}
                  </span>
                  <span className="font-normal sm:inline block">
                    <span className="sm:inline hidden">{" - "}</span>
                    {item.contract_period}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender({ data, setValue }) {
  return (
    <>
      <Dropdown color="white" data={data} setValue={setValue} />
    </>
  );
}
