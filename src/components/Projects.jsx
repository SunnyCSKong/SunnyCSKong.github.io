import React from "react";
import "./Projects.css";
import { proj, skills } from "../constants";

const ProjCard = ({ projName, projDescrip, link, name }) => (
  <div class="p-statements">
    <h4>{projName}</h4>
    <p>{projDescrip}</p>
    <a href={link} class="p-links">
      &#128279;
    </a>
  </div>
);

function Projects() {
  return (
    <div id="project">
      <div className="container">
        <h1 className="p-title">Projects</h1>
        <div className="p-content">
          {proj.map((project, index) => (
            <ProjCard key={project.id} {...project} index={index}></ProjCard>
          ))}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr class="line"></hr>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="skills">
          {skills.map((skill, index) => (
            <img src={skill.logo} alt="" class="s-img" index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
