import heroSVG from "../assets/layered-waves-haikei.svg";
import { sun } from "../assets";
import "./Hero.css";
import React, { useEffect, useState } from "react";
function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the translateY value based on the scroll position
  const translateY = scrollPosition - 70;
  //add under the h2 some icons with links to github linkedin
  return (
    <div class="h-container" id="home">
      <div class="background-gradient">
        <img src={heroSVG} alt="" class="bg" />
        <div class="title" style={{ transform: `translateY(${translateY}px)` }}>
          <img src={sun} alt="" class="sun" />
          <div class="text">
            <h1 class="school name">Sunny Kong</h1>
            <h2 class="school other">
              Western University <br></br>Computer Science
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
