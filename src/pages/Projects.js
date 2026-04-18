import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import { ProjectListEng } from "../helpers/ProjectListEng";
import { ProjectListFr } from "../helpers/ProjectListFr";
import "../styles/Projects.css";

function Projects() {
  const { language } = useLanguage();
  const projectList = language === "english" ? ProjectListEng : ProjectListFr;

  const navigate = useNavigate();

  const handleClick = (category, index) => {
    navigate(`/project/${category}/${index}`);
  };

  const ProjectItem = ({ category, name, image, index }) => {
    return (
      <div className="projectItem" onClick={() => handleClick(category, index)}>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1>{name}</h1>
      </div>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderProjects = (projects, categoryName) => (
    <div className="projectList">
      {projects.map((project, idx) => (
        <ProjectItem
          category={categoryName}
          name={project.name}
          image={project.image}
          key={`${categoryName}-${idx}`}
          index={idx}
        />
      ))}
    </div>
  );

  return (
    <div className="projects">
      <h2>{language === "english" ? "My Personal Projects" : "Mes Projets Personnels"}</h2>
      <div className="allprojects">
        <div className="projectcategorie">
          <h3>{language === "english" ? "Research" : "Recherche"}</h3>
          {renderProjects(projectList.ResearchProjects, "Research")}
        </div>

        <div className="projectcategorie">
          <h3>{language === "english" ? "Data and AI" : "Data et IA"}</h3>
          {renderProjects(projectList.dataProjects, "data")}
        </div>

       

        <div className="projectcategorie">
          <h3>{language === "english" ? "Games with C" : "Jeux en C"}</h3>
          {renderProjects(projectList.cProjects, "c")}
        </div>

        <div className="projectcategorie">
          <h3>{language === "english" ? "Arduino and Robotics" : "Robots et Arduino"}</h3>
          {renderProjects(projectList.arduinoProjects, "arduino")}
        </div>
      </div>
    </div>
  );
}

export default Projects;
