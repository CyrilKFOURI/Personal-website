import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext"; 
import { ExperienceListEng } from "../helpers/ExperienceListEng";
import { ExperienceListFr } from "../helpers/ExperienceListFr";
import "../styles/ExperienceDisplay.css";

function ExperienceDetails() {
  const { id } = useParams();
  const { language } = useLanguage(); 
  const experienceList = language === 'french' ? ExperienceListFr : ExperienceListEng;
  const experience = experienceList[id]; 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackButtonClick = () => {
    window.history.back(); 
  };

  const aboutCompanyTitle = language === 'french' ? 'À propos de l\'entreprise' : 'About the Company';
  const whatIDidTitle = language === 'french' ? 'Ce que j\'ai fait' : 'What I did';
 
  return (
  <div className="ExperienceDetailcont">
    <button onClick={handleBackButtonClick} className="backButton">
      <span>↩️</span> {language === "english" ? "Back" : "Retour"}
    </button>
    <div className="ExperienceDetail">
      <h1>{experience.title}</h1>
      <img src={experience.image} alt={experience.title} />
      <h2>{aboutCompanyTitle}</h2>
      <p>{experience.aboutCompany}</p>
      <div className="What-I-Did">
        <h2>{whatIDidTitle}</h2>
        <img src={experience.image2} alt={experience.title} />
        <p>{experience.whatIDid}</p>
      </div>
    </div>
    </div>
  );
}

export default ExperienceDetails;
