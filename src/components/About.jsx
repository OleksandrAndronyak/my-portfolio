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
          Hi, I'm Oleksandr Andronyak, a Full Stack Web Developer with a passion
          for building user-friendly and engaging web applications. I have a
          strong foundation in both front-end and back-end technologies. What I
          love most about web development is the endless potential for
          creativity and innovation. I am constantly motivated by the challenge
          of finding elegant solutions to complex problems.
        </p>

        <br />

        <p className="text-xl">
          Outside of work, I enjoy gym, surf, diving, sunsets, and
          self-improvement. I believe that maintaining a balance between work
          and personal life is essential for achieving success and happiness. If
          you're interested in learning more about my experience and skills, or
          if you have a potential project or opportunity you'd like to discuss,
          please don't hesitate to contact me.
        </p>
      </div>
    </div>
  );
};

export default About;
