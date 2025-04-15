import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeX - 0.5) * 5;
    const tiltY = (relativeY - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ imageSrc, title, description }) => {
  return (
    <div className="relative size-full">
      <img
        src={imageSrc}
        alt={title}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 bg-black bg-opacity-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Dead Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in Deadpool's universe where chaos meets comedy, and the fourth wall is just a suggestion.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            imageSrc="/img/deadpool1.jpg"
            title={
              <>
                With great power comes great <b>irresponsibility</b>
              </>
            }
            description="Deadpool redefines heroism with a twist of humor and a dash of chaos."
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              imageSrc="/img/deadpool2.jpg"
              title={
                <>
                  I'm gonna do this the old-fashioned way: <b>two swords</b> and <b>maximum effort</b>
                </>
              }
              description="Deadpool's approach to problem-solving: sharp blades and sharper wit."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              imageSrc="/img/deadpool3.jpg"
              title={
                <>
                  You may be wondering why the red suit. Well, that's so bad guys can't see me <b>bleed</b>
                </>
              }
              description="A practical choice with a touch of Deadpool's signature humor."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              imageSrc="/img/deadpool4.jpg"
              title={
                <>
                  I'm about to do to you what Limp Bizkit did to <b>music</b> in the late '90s
                </>
              }
              description="A pop culture reference delivered with Deadpool's unique flair."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              imageSrc="/img/deadpool5.jpg"
              title={
                <>
                  M<b>o</b>re <br /> co<b>m</b>ing <br /> s<b>o</b>on!
                </>
              }
            />
          </BentoTilt>
          
        </div>
      </div>
    </section>
  );
};

export default Features;
