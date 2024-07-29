import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";

import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 0.7, delay: 2 });

    gsap.to("#order", { y: -50, delay: 2, opacity: 1 });
  }, []);

  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 640 ? smallHeroVideo : heroVideo
  );

  const regulatVideo = () => {
    window.innerWidth > 640
      ? setvideoSrc(heroVideo)
      : setvideoSrc(smallHeroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", regulatVideo);
    // console.log("EFFECT");

    return () => {
      window.removeEventListener("resize", regulatVideo);
      // console.log("CLEAR");
    };
  }, []);

  return (
    <section className="w-full nav-height bg-black">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15
        </p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted key={videoSrc}>
            <source type="video/mp4" src={videoSrc} />
          </video>
        </div>
      </div>
      <div
        id="order"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $99</p>
      </div>
    </section>
  );
};

export default Hero;
