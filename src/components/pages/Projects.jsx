import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { proj } from "../../constants";

export default function Projects({ opacity }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
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
          <h2 className="text-5xl mb-8">Projects</h2>
          <Slider {...settings}>
            {proj.map((item) => (
              <div
                className="relative h-60 flex items-center justify-center bg-gray-200 rounded-lg px-12"
                key={item.id}
              >
                <a
                  href={item.link}
                  className="text-blue-600 hover:text-blue-800 visited:text-purple-600 text-3xl"
                >
                  {item.projName}
                </a>

                <p className="">
                  <br />
                  {item.projDescrip}
                </p>

                <div className="absolute inset-x-0 bottom-0 py-5">
                  <p className="">Technologies Used</p>
                  <hr className="border-t-2 border-black mx-40" />
                  <span className="mt-2">{item.tech}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
