import React from "react";
import i from "../assets/i.jpg";
function About(props) {
  return (
    <div className="m-5">
        <h1 className="text-3xl font-bold text-center ">About Me</h1>
      <div className="grid grid-flow-col grid-rows-2 gap-4">
        <div className="row-span-3">
          <img src={i} alt="About me" className="w-200 h-150 rounded" />
        </div>
        <div className="row-span-2 mt-40 ml-50">
            <h2 className="text-2xl font-bold text-center ">Let me introduce myself</h2>
          <p className="text-lg text-gray-600 flex justify-center text-center max-w-80">
            Hello, my name is Sreyroth Nok. I'm a software engineer and
            freelance graphic designer. I specialize in React and JavaScript. I
            enjoy working on projects that bring joy and make people's lives
            easier.
          </p>
          <p className="text-lg text-gray-600">
            I'm passionate about learning new technologies and staying
            up-to-date with the latest trends in the industry
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
