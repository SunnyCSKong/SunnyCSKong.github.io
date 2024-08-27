import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { skills } from "../../constants";

export default function Projects({ opacity }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      className="fixed h-screen w-screen flex items-center justify-start p-10"
      style={{
        opacity: opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-white rounded-lg px-12 py-12 text-center w-full">
          <h2 className="text-5xl mb-8">
            Some things I've learned over the years
          </h2>
          <Slider {...settings}>
            {skills.map((item) => (
              <div
                className="h-60 flex items-center justify-center bg-gray-200 rounded-lg px-12"
                key={item.id}
              >
                <h1 className="text-3xl mb-5">{item.title}</h1>
                {item.descrip.map((descripItem) => (
                  <p key={descripItem.id}>{descripItem.text}</p>
                ))}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
