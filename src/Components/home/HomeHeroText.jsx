import React from "react";
import Video from "./video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] lg:pt-20 pt-40 text-white ">
      <div className="text-center lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]">
        The spark
      </div>
      <div className="text-center lg:text-[9.5vw] text-[12vw] flex items-center justify-center  uppercase lg:leading-[8vw] leading-[10vw]">
        who
        <div className="lg:h-[8vw] h-[10vw] rounded-full overflow-hidden mt-2 ">
          <Video />
        </div>
      </div>
      <div className="text-center lg:text-[9.5vw] text-[12vw] pt-2 uppercase lg:leading-[8vw] leading-[10vw]">
        generates
      </div>
      <div className="text-center lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]">
        there
      </div>
      <div className="text-center lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]">
        creativity
      </div>
    </div>
  );
};

export default HomeHeroText;
