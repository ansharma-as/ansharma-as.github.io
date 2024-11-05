import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className="bg-transparent shadow-md rounded-lg overflow-hidden ml-20">
      <img
        className="w-full h-48 object-cover"
        src={props.imgPath}
        alt="card-img"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
        <p className="text-gray-700 text-base mb-4 text-justify">
          {props.description}
        </p>
        <div className="flex justify-start">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </a>
          {/* If the component contains Demo link and if it's not a Blog, render the below component */}
          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition ml-2"
            >
              <CgWebsite /> &nbsp; Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
