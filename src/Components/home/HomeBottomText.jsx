import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="text-white mt-[25vh] font-[font2] uppercase flex items-center justify-center gap-6 ">
      <p className="absolute lg:w-[18vw] w-60 lg:right-5 right-0 lg:bottom-0 bottom-35 font-[font1] text-sm lg:leading-relaxed leading-tight">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72
        is an agency that builds brands from every angle. Today, tomorrow and
        years from now. We think the best sparks fly when comfort zones get left
        behind and friction infuses our strategies, brands and communications
        with real feeling. We’re transparent, honest and say what we mean, and
        when we believe in something, we’re all in.
      </p>
      <div className="mt-[30vh] text-[5.5vw] border-2 border-white rounded-full hover:text-lime-custom hover:border-lime-custom lg:h-27  leading-none px-9 py-2">
        <Link className="text-[6vw] mt-10" to="/projects">
          Projects
        </Link>
      </div>

      <div className="mt-[30vh] text-[5.5vw] border-2 border-white rounded-full hover:text-lime-custom hover:border-lime-custom lg:h-27 leading-none   px-9 py-2">
        <Link className="text-[6vw] mt-6" to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
