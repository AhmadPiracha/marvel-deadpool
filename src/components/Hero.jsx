import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [videoInView, setVideoInView] = useState(false);
  const videoRef = useRef(null);



  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">

      <div
        id="video-frame"
        ref={videoRef}
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          {videoInView ? (
            <video
              src="videos/hero.mp4"
              autoPlay
              loop
              muted
              className="absolute left-0 top-0 size-full object-cover object-center"
            />
          ) : (
            <img
              src="images/video-placeholder.jpg"
              alt="Video placeholder"
              className="absolute left-0 top-0 size-full object-cover object-center"
            />
          )}
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          D<b>e</b>adpool
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              marv<b>e</b>l
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              With great power comes <br /> great irresponsibility.
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black-75">
        D<b>e</b>adpool
      </h1>
    </div>
  );
};

export default Hero;
