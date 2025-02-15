import React from "react";
import WorkTeam from "./WorkTeam";

const data = [
  {
    year: 2020,
    title: "content creater",
    description: "content creator",
    details:
      "lorem ipsum dolor sit amet, consect et purus et males u et males pos representations dui just e i n qu lorem ipsum dolor sit amet, consect et purus et males u et males pos representations dui just e i n qu     ",
  },
  {
    year: 2021,
    title: "web developer",
    description: "web developer",
    details:
      "lorem ipsum dolor sit amet, consect et purus et males u et males pos representations dui just e i n qu lorem ipsum dolor sit amet, consect et purus et males u et males pos representations dui just e i n qu     ",
  },
  {
    year: 2022,
    title: "content writer",
    description: "content writer",
    details:
      "lorem ipsum dolor sit amet, consect et purus et males u et males pos representations dui just e i n qu lorem ipsum dolor sit amet, consect et purus et males u et males pos representations dui just e i n qu     ",
  },
  {
    year: 2023,
    title: "content editor",
    description: "content editor",
    details:
      "lorem ipsum dolor sit amet, consect et purus et males u et males pos representations dui just e i n qu lorem ipsum dolor sit amet, consect et purus et males u et males pos representations dui just e i n qu     ",
  },
];
function Work(props) {
  return (
    <div id="work" className="max-w-[1044px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center m-2 text-[#001b5a]">Work</h1>
      {data.map((item, id) => (
        <WorkTeam
          key={id}
          year={item.year}
          title={item.title}
          description={item.description}
          details={item.details}
        />
      ))}
    </div>
  );
}

export default Work;
