/* Grid components */
import React from "react";
import { BsGithub } from "react-icons/bs";
import { RiShareBoxLine } from "react-icons/ri";

/* Grid function takes 5 parameter */
const Grid = ({ images, description, title, live, github }) => {
  return (
    /* Main div */
    <div className="grid grid-cols-1  xl:grid-cols-3 justify-items-center place-items-center gap-y-10 md:w-4/5 md:mx-auto">
      {
        /* Iterates over an array 2 parameters */
        images.map((image, index) => (
          <div
            key={index}
            className="shadow-2xl rounded-lg overflow-hidden h-full md:w-4/5"
          >
            {/* Gets the images */}
            <img
              src={image}
              alt={`project${index} screenshot`}
              className="w-full h-auto"
            />
            <h3 className="px-4 py-3 text-2xl font-semibold flex justify-center">
              {title[index]}
            </h3>
            <p className="px-4">{description[index]}</p>

            {/* Links */}
            <div className="flex justify-center items-center py-4 cursor-pointer font-medium">
              <RiShareBoxLine size={30} className="text-light-gray " />
              <a
                href={live[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-1xl text-light-gray px-4 hover:text-blue hover:scale-110 duration-300"
              >
                See Live
              </a>
              <h2 className="text-3xl pr-4">|</h2>
              <BsGithub size={30} className="text-light-gray" />
              <a
                href={github[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-1xl text-light-gray px-4 hover:text-blue hover:scale-110 duration-300"
              >
                View Code
              </a>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Grid;
