import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import i from '../assets/i.jpg';

function Main(props) {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={i}
        alt="picture"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-3xl text-4xl font-bold text-gray-500">Sreyroth Nok</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-700">
            I'm
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "coding",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "front-end",
                1000,
                "developer",
                1000,
                "web",
                1000,
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebook className="cursor-pointer" size={20}  />
            <FaInstagram className="cursor-pointer" size={20}  />
            <FaLinkedinIn className="cursor-pointer" size={20}  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
