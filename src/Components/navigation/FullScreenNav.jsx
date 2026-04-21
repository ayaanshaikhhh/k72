import React, { useContext, useRef } from "react";
import Basket from "../../assets/Basket.jpg";
import thumbnail from "../../assets/Thumbnail.png";
import camille from "../../assets/CAMILLE_.jpg";
import gg from "../../assets/gg.gif";
import hh from "../../assets/hhpng.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { flushSync } from "react-dom";
import { NavBarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinkRef = useRef(null);
  const fullScreenRef = useRef(null);
  // GSAP CODE =>
  const [navOpen, setnavOpen] = useContext(NavBarContext);
  console.log(navOpen);

  function useGSAPAnimation() {
    const tl = gsap.timeline();
    tl.from(".stairing", {
      // delay: 0.5,
      height: 0,
      stagger: { amount: 0.1 },
    });

    tl.from(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.2,
      },
    });
    tl.from(".navlink", { opacity: 0 });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsap.to("#fullscreennav", { display: "block" });
        useGSAPAnimation();
      } else {
        gsap.to("#fullscreennav", { display: "none" });
      }
    },
    [navOpen],
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="hidden font-[2] h-full w-full absolute z-10 bg-black text-white overflow-hidden"
    >
      <div className="h-screen w-full fixed ">
        <div className=" h-full flex w-full fixed">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div>
        <div key={fullNavLinkRef} className="relative">
          <div className="navlink flex w-full justify-between items-start">
            <div className="w-33.5 p-2.5">
              <svg
                className=" text-white  w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
            {/* cross icon  */}
            <div
              onClick={() => {
                setnavOpen(false);
              }}
              className="pt-3 pr-4  cursor-pointer group"
            >
              <div className=" relative h-25 w-25">
                <div className=" absolute h-34 w-0.5 -rotate-45 origin-top  bg-white  group-hover:bg-lime-custom "></div>
                <div className="absolute h-34 w-0.5 right-0 rotate-45 origin-top bg-white group-hover:bg-lime-custom "></div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="link origin-top relative link border-t-1 pt-[1vh] ">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.8] lg:pt-3 p-2 uppercase ">
              Projects
            </h1>
            <div className="moveLink absolute flex top-0 bg-lime-custom text-black overflow-hidden">
              <div className="moveX flex  items-center shrink-0">
                <h2 className="pr-[2vw] pl-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-3 uppercase">
                  to see everything
                </h2>
                <img
                  className="lg:h-32 h-13 w-50 rounded-full object-cover shrink-0"
                  src={Basket}
                  alt="basket"
                />
                <h2 className="text-black pl-[2vw] pr-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.8] pt-3 uppercase">
                  to see everything
                </h2>
                <img
                  className="lg:h-23 h-13 w-50 rounded-full object-cover shrink-0"
                  src={thumbnail}
                  alt="basket"
                />
              </div>

              <div className="moveX flex  items-center shrink-0">
                <h2 className="pr-[2vw] pl-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.8] pt-3 uppercase">
                  to see everything
                </h2>
                <img
                  className="lg:h-23 h-13 w-50 rounded-full object-cover shrink-0 "
                  src={Basket}
                  alt="basket"
                />
                <h2 className="text-black pl-[2vw] pr-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.8] pt-3 uppercase">
                  to see everything
                </h2>
                <img
                  className="lg:h-23 h-13 w-50 rounded-full object-cover shrink-0 "
                  src={thumbnail}
                  alt="basket"
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative link border-t-1 pt-[1vh] ">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.8] lg:pt-3 p-2 uppercase ">
              Agence
            </h1>
            <div className="moveLink absolute flex top-0 bg-lime-custom text-black overflow-hidden">
              <div className="moveX flex  items-center shrink-0">
                <h2 className="pr-[2vw] pl-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-3 uppercase">
                  know us
                </h2>
                <img
                  className="lg:h-23 h-13 w-50 rounded-full object-cover shrink-0"
                  src={camille}
                  alt="camille"
                />
                <h2 className="text-black pl-[2vw] pr-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.8] pt-3 uppercase shrink-0">
                  know us
                </h2>
                <img
                  className="lg:h-23 h-13 w-50 rounded-full object-cover shrink-0"
                  src={thumbnail}
                  alt="basket"
                />
              </div>

              <div className="moveX flex  items-center shrink-0">
                <h2 className="pr-[2vw] pl-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.8] pt-3 uppercase">
                  know us
                </h2>
                <img
                  className="lg:h-23 h-13 w-50 rounded-full object-cover shrink-0"
                  src={camille}
                  alt="basket"
                />
                <h2 className=" text-black pl-[2vw] pr-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-3 uppercase">
                  know us
                </h2>
                <img
                  className="lg:h-23 h-13 w-50 rounded-full object-cover shrink-0"
                  src={thumbnail}
                  alt="basket"
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative link border-t-1 pt-[1vh] ">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.8] lg:pt-3 p-2 uppercase ">
              Contacts
            </h1>
            <div className="moveLink absolute flex top-0 bg-lime-custom text-black overflow-hidden">
              <div className="moveX flex  items-center shrink-0">
                <h2 className="pr-[2vw] pl-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-3 uppercase">
                  to see everything
                </h2>
                <img
                  className="lg:h-23 h-13 w-50 rounded-full object-cover shrink-0"
                  src={Basket}
                  alt="basket"
                />
                <h2 className="text-black pl-[2vw] pr-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.8] pt-3 uppercase">
                  send us a fax
                </h2>
                <img
                  className="lg:h-23 h-13 w-50 rounded-full object-cover shrink-0"
                  src={thumbnail}
                  alt="basket"
                />
              </div>

              <div className="moveX flex items-center shrink-0">
                <h2 className="pr-[2vw] pl-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-3 uppercase">
                  send us a fax
                </h2>
                <img
                  className="lg:h-23 h-13 w-50 rounded-full object-cover shrink-0"
                  src={Basket}
                  alt="basket"
                />
                <h2 className="text-black pl-[2vw] pr-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-3 uppercase">
                  send us a fax
                </h2>
                <img
                  className="lg:h-23 h-13 w-50 rounded-full object-cover shrink-0"
                  src={thumbnail}
                  alt="basket"
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative link border-t-1 border-b-1  pt-[1vh] border-white ">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.8] lg:pt-3 p-2 uppercase ">
              Blogue
            </h1>
            <div className="moveLink absolute flex top-0 bg-lime-custom text-black overflow-hidden">
              <div className="moveX flex  items-center shrink-0">
                <h2 className="pr-[2vw] pl-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-3 uppercase">
                  read articles
                </h2>
                <img
                  className="lg:h-32 h-13 w-50 rounded-full object-cover shrink-0"
                  src={gg}
                  alt="basket"
                />
                <h2 className=" text-black pl-[2vw] pr-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.8] pt-3 uppercase">
                  read articles
                </h2>
                <img
                  className="lg:h-23 h-13 w-50 rounded-full object-cover shrink-0"
                  src={hh}
                  alt="basket"
                />
              </div>

              <div className="moveX flex  items-center shrink-0">
                <h2 className="pr-[2vw] pl-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.8] pt-3 uppercase">
                  read articles
                </h2>
                <img
                  className="lg:h-23 h-13 w-50 rounded-full object-cover shrink-0"
                  src={gg}
                  alt="basket"
                />
                <h2 className="text-black pl-[2vw] pr-[2vw] whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.8] pt-3 uppercase">
                  read articles
                </h2>
                <img
                  className="lg:h-23 h-13 w-50 rounded-full object-cover shrink-0"
                  src={hh}
                  alt="basket"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
