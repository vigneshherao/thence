import React from "react";
import logo from "../assets/Vector.png";
const Navbar = () => {
  return (
    <div className="px-10">
      <div className="border w-full mx-auto flex justify-between items-center my-5 py-4 pr-[20.89px] pl-[52px] rounded-l-full rounded-r-full  ">
        <div>
          <img src={logo} alt="imageLogo" />
        </div>
        <div className="gap-4">
          <button className="bg-white text-black border py-5 px-5 rounded-l-full rounded-r-full  text-center mr-5">
            Get projects
          </button>
          <button className="bg-black text-white py-5 px-5 rounded-l-full rounded-r-full  text-center">
            Onboard Talent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
