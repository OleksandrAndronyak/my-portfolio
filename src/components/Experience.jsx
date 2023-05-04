import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImage from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import NextJS from "../assets/nextjs.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import MongoDB from "../assets/mongodb.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: NextJS,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 6,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: Node,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: GitHub,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-green-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl front-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">This are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="html" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
