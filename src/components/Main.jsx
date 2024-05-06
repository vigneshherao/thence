import React from "react";
import text from "../assets/Frame.png";
import lady from "../assets/Lady.png";
import text1 from "../assets/maintext.png";
import loading from "../assets/loading.png";
import explore from "../assets/explore.png";
import newwork from "../assets/newwork.png";
import footer from "../assets/Footer.png";


const Main = () => {
  return (
    <div className="w-full h-screen">
      <div className="m-20">
        <img className="m-auto" src={text}></img>
      </div>
      <div className="flex">
        <div className="">
          <img src={lady}></img>
        </div>
        <div className="m-auto items-center">
          <div>
            <img src={text1}></img>
          </div>
          <div className="mt-10">
            <img src={loading} />
          </div>
          <div className="mt-20">
          <img src={explore} />
          </div>
        </div>
      </div>
      <div className="">
          <img className="m-auto" src={newwork}></img>
      </div>
      <div className="mt-10">
        <img className="m-auto" src={footer}></img>
      </div>
    </div>
  );
};

export default Main;
