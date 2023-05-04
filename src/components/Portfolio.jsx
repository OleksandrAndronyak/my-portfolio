import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import studioMila from "../assets/portfolio/studioMila.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      codeUrl: "https://github.com/OleksandrAndronyak/Chronicles-Musing",
      demoUrl: "https://www.google.com/",
    },
    {
      id: 2,
      src: installNode,
      codeUrl: "https://github.com/OleksandrAndronyak/Itunes",
      demoUrl: "https://www.g2play.net/",
    },
    {
      id: 3,
      src: navbar,
      codeUrl: "https://github.com/OleksandrAndronyak/hangman",
      demoUrl: "www.studio-mila-beauty.com",
    },
    {
      id: 4,
      src: reactParallax,
      codeUrl: "https://github.com/OleksandrAndronyak/studio-mila",
      demoUrl: "www.studio-mila-beauty.com",
    },
    {
      id: 5,
      src: studioMila,
      codeUrl: "https://github.com/OleksandrAndronyak/studio-mila",
      demoUrl: "http://www.studio-mila-beauty.com/",
    },
  ];

  //! Function to map through portfolios and get each codeUrl and demoUrl
  const getProjectLinks = (portfolios) => {
    return portfolios.map((project) => {
      return {
        codeUrl: project.codeUrl,
        demoUrl: project.demoUrl,
      };
    });
  };

  //! Calling function and passing portfolios as argument
  const projectLinks = getProjectLinks(portfolios);

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }, index) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="studio mila"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex item-center justify-center">
                <a
                  href={projectLinks[index].demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a
                  href={projectLinks[index].codeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
