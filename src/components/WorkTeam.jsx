import React from "react";

function WorkTeam(props) {
  return (
    <div className="flex flex-col md:flex-row relative border-1 border-stone-200">
      <div className="mb-10 ml-4 p-5">
        <div className="absolute w-3 h-3 bg-stone-200 mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-center md:justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5a] rounded-md">
            {props.year}
          </span>
          <span className="text-lg font-semibold text-[#001b5a]">
            {props.title}
          </span>
          <span className="my-1 text-sm font-extrabold leading-none text-stone-400">
            {props.description}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-stone-500">
          {props.details}
        </p>
      </div>
    </div>
  );
}

export default WorkTeam;
