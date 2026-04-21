import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";

const Stairs = (props) => {
  //   console.log(props);
  const stairParent = useRef(null);
  const currentPath = useLocation().pathname;
  const pageRef = useRef(null);

  //   useGSAP(
  //     function () {
  //       const tl = gsap.timeline();

  //       tl.to(stairParent.current, {
  //         display: "block",
  //       });

  //       tl.from(".stair", {
  //         height: 0,
  //         stagger: {
  //           amount: 0.15,
  //         },
  //       });
  //       tl.to(".stair", {
  //         y: "100%",
  //         stagger: {
  //           amount: 0.15,
  //         },
  //       });

  //       tl.to(stairParent.current, {
  //         display: "none",
  //       });

  //       tl.to(".stair", {
  //         y: 0,
  //         stagger: {
  //           amount: -0.3,
  //         },
  //       });

  //       gsap.from(pageRef.current, {
  //         opacity: 0,
  //         delay: 1.5,
  //       });
  //     },
  //     [currentPath],
  //   );

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set(stairParent.current, { display: "block" });

    tl.from(".stair", {
      height: 0,
      stagger: { amount: 0.15 },
    });

    tl.to(".stair", {
      y: "100%",
      stagger: { amount: 0.15 },
    });

    tl.set(stairParent.current, { display: "none" });

    tl.to(pageRef.current, {
      opacity: 1,
      duration: 0.5,
    });

    // instant reset (no animation)
    tl.set(".stair", { y: 0 });
  }, [currentPath]);
  return (
    <div>
      <div className="text-white text-2xl">
        <div ref={stairParent} className=" h-screen  w-full fixed top-0 z-20">
          <div className=" h-full flex w-full fixed">
            <div className="stair h-full w-1/5 bg-black"></div>
            <div className="stair h-full w-1/5 bg-black"></div>
            <div className="stair h-full w-1/5 bg-black"></div>
            <div className="stair h-full w-1/5 bg-black"></div>
            <div className="stair h-full w-1/5 bg-black"></div>
          </div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>{" "}
    </div>
  );
};

export default Stairs;
