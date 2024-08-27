import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";

export const Overlay = ({ freeCam, setArrowOpacity }) => {
  const scroll = useScroll();
  const [introOpacity, setIntroOpacity] = useState(1);
  const [aboutOpacity, setAboutOpacity] = useState(1);
  const [projectOpacity, setProjectOpacity] = useState(1);
  const [skillsOpacity, setSkillsOpacity] = useState(1);

  useFrame(() => {
    setIntroOpacity(scroll.curve(0, 0.4));
    setAboutOpacity(scroll.curve(2 / 5, 1 / 5));
    setProjectOpacity(scroll.curve(2.55 / 4, 1 / 5));
    setSkillsOpacity(scroll.range(3 / 4, 1 / 4));
    setArrowOpacity(1 - scroll.range(0.0, 0.03));
  });

  return (
    <Scroll html>
      {!freeCam && (
        <>
          <div className="h-[53vh]" id="spacer" />
          <Intro opacity={introOpacity} />
          <AboutMe opacity={aboutOpacity} />
          <div className="h-[77vh]" id="spacer" />
          <Projects opacity={projectOpacity} />
          <div className="h-[80vh]" id="spacer" />
          <Skills opacity={skillsOpacity} />
        </>
      )}
    </Scroll>
  );
};
