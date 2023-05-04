import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b pt-5 from from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          laboriosam eveniet molestiae ad dolores cumque. Molestias, velit?
          Dignissimos nemo modi quibusdam ad labore dolorum consectetur
          voluptatem dolore saepe tempora ducimus, totam magnam corporis. Sunt,
          ad nihil eveniet eligendi aperiam culpa suscipit quaerat ut quis ipsa
          nemo non maiores magnam quasi.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          cumque accusamus, blanditiis omnis provident voluptate aliquam
          mollitia ad distinctio fugiat ea placeat magnam architecto corrupti
          fugit, quis rem facere debitis vel unde aliquid nihil? Voluptatum
          possimus omnis expedita beatae quibusdam quo excepturi ipsa ea
          reiciendis cumque, nisi praesentium recusandae. Quo?
        </p>
      </div>
    </div>
  );
};

export default About;
