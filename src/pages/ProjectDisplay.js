import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import { ProjectListEng } from "../helpers/ProjectListEng";
import { ProjectListFr } from "../helpers/ProjectListFr";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { category, index } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const projectList = language === "english" ? ProjectListEng : ProjectListFr;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectIndex = parseInt(index, 10);
  const categoryKey = `${category}Projects`;
  const categoryData = projectList[categoryKey];
  const project = categoryData[projectIndex];

  const handleBackButtonClick = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };
  

  return (
    <div className="projectcont">
      <button onClick={handleBackButtonClick} className="backButton">
        <span>↩️</span> {language === "english" ? "Back" : "Retour"}
      </button>
      <div className="project">
        <div className="projectMainDisplay">
          <h1>{project.name}</h1>
          <img src={project.image} alt={project.name} />
          <p>
            <b>Skills:</b> {project.skills}
          </p>
        </div>
        <div className="Projectdescrption">
          <h1>{language === "english" ? "Description" : "Description"}</h1>
          <p>{project.description}</p>
          {project.description2 && <p>{project.description2}</p>}
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;