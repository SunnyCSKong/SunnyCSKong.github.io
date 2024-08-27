import React from "react";
import { certifications } from "../../constants";
export default function AboutMe({ opacity }) {
  return (
    <section
      className="fixed h-screen w-screen flex items-center justify-end p-10"
      style={{ opacity: opacity }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-white rounded-lg px-9 py-10 text-center">
          <h2 className="text-5xl">About Me</h2>
          <br />
          <p>
            I'm a highly motivated software developer with a passion for
            creating innovation and problem solving.
            <br />
            Apart from that, I'm constantly trying to stay on top of new
            technologies and learning to read sheet music.
            <br />I have a specialization in Computer Science and a minor in
            Software Engineering. Some certifications I have:&nbsp;
            {certifications.map((cert) => (
              <a
                href={cert.link}
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                key={cert.id}
              >
                {cert.name}
              </a>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
