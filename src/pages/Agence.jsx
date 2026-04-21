import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import camille from "../assets/CAMILLE_.jpg";
import carl from "../assets/Carl.jpg";
import chantal from "../assets/ChantalG.jpg";
import joel from "../assets/joel.jpg";
import meggie from "../assets/MEGGIE.jpg";
import mel from "../assets/MEL.jpg";
import michele from "../assets/Michele.jpg";
import olivier from "../assets/Olivier.jpg";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  // IMAGES ARRAY =>
  const images = [camille, carl, chantal, joel, meggie, mel, michele, olivier];
  // console.log(images);
  gsap.registerPlugin(ScrollTrigger);

  // GSAP CODE

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 20%",
        end: "top -190%",
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          const imageIndex = Math.floor(elem.progress * (images.length - 1));
          // selecting first image and replacing it with the images array
          imageRef.current.src = images[imageIndex];
        },
      },
    });
  });
  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden h-[45vh] lg:w-[15vw] w-25 rounded-3xl lg:top-[20vh] top-0 lg:left-[31.5vw] left-33"
        >
          <img
            ref={imageRef}
            className="lg:h-full h-30 object-cover lg:w-full w-full rounded-2xl "
            src="/Agence1stIMG.jpg"
            alt="img1"
          />
        </div>
        <div className="relative font-[font2]">
          <div className=" lg:mt-[55vh] mt-50">
            <h1 className="lg:text-[20vw] text-6xl text-black text-center uppercase leading-[16.8vw]">
              Sixty <br /> seven <br />
            </h1>
          </div>

          <div className="lg:pl-[40vw] pl-10 pr-8   mt-5 ">
            <p className=" text-black lg:text-6xl text-xl">
              &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our
              curiosity fuels our creativity. We remain humble and say no to big
              egos, even yours. A brand is alive. It has values, a personality,
              a history. If we forget that, we might achieve good short-term
              results, but we'll kill it in the long run. That's why we're
              committed to providing perspective, to building influential
              brands. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam veritatis unde aliquam non soluta esse dolore error
              consectetur sed accusamus accusantium, commodi illo velit quis,
              quisquam voluptates est eveniet cum. Nesciunt tempore maxime
              dignissimos asperiores magni blanditiis earum tempora explicabo,
              maiores eos ab labore sed a atque, dolores dolorem quod error
              eius? Officiis magni, molestias ipsa debitis voluptatibus nesciunt
              sint. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum dolorum quas commodi sapiente in aperiam beatae aut
              doloribus nulla iusto nisi soluta ex pariatur, error at illo
              perspiciatis assumenda labore. Ratione molestiae voluptates error
              tempore id? Magnam distinctio sit assumenda, reprehenderit totam
              delectus. Quae nihil, veritatis nisi modi ullam, recusandae
              eligendi dolore soluta adipisci eveniet excepturi architecto
              molestiae, provident doloribus. Ducimus dolores odio eum quo
              sapiente, quibusdam ea deserunt facilis odit animi amet hic
              molestias expedita sit exercitationem laborum asperiores aliquam
              fuga beatae eligendi ipsam delectus saepe a! Quisquam, nulla.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              officia quod blanditiis excepturi error magnam temporibus
              perferendis nemo, ratione accusantium, itaque explicabo commodi
              quasi. Atque repudiandae quo accusamus optio consectetur? Facilis
              reprehenderit dolorem vel, hic in repellat autem ipsum esse
              blanditiis eius sapiente itaque perspiciatis, ullam dolor
              temporibus fuga tempora maiores pariatur explicabo molestias nisi.
              Quam omnis ullam modi dolorem!
            </p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
