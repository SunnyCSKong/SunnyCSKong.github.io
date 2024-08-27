import React from "react";

export default function Intro({ opacity }) {
  return (
    <section
      className="h-screen w-screen flex items-center justify-center p-10 relative"
      style={{
        opacity: opacity,
      }}
    >
      <div className="absolute left-[17vw] transform -translate-x-1/2">
        <img
          src="./linkedinpicture-min.jpg"
          alt="me"
          className="w-60 h-auto rounded-lg"
        />
      </div>
      <div className="bg-white rounded-lg px-12 py-10 text-center">
        <h1 className="text-2xl">Hi, I'm</h1>
        <h2 className="text-5xl">Sunny Kong</h2>
        <p className="">
          <br />
          I've recently graduated from
          <span className="text-purple-950"> Western University </span>
          with a BSc in Computer Science
          <br />
          and a minor in Software Engineering.
        </p>
      </div>
    </section>
  );
}
