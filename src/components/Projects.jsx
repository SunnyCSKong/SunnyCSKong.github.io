import React from "react";
import "./Projects.css";
import { proj, skills, languages, tools, frameworks } from "../constants";

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
      <div className="p-container">
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr class="line"></hr>

        <div className="additional-container">
          <h1 className="add">Other skills</h1>
          <div className="skill-type-c">
            <div className="langs">
              <p className="skill-title">Other Languages</p>
              <ul className="lang-list">
                {languages.map((lang, index) => (
                  <li className="lang" index={index}>
                    {lang.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="tools">
              <p className="skill-title">Tools</p>
              <ul className="tool-list">
                {tools.map((tool, index) => (
                  <li className="tool" index={index}>
                    {tool.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="frameworks">
              <p className="skill-title">Frameworks and Libraries</p>

              <ul className="frameworks-list">
                {frameworks.map((frame, index) => (
                  <li className="frames" index={index}>
                    {frame.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
