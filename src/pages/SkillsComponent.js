import React from 'react';
import { skills } from "../helpers/SkillsList";
import "../styles/Home.css";
import { useLanguage } from '../components/LanguageContext'; 

const SkillsComponent = () => {
  const { language } = useLanguage(); 

  const renderSkills = (skills) => (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          {skill.logo && <i className={`${skill.logo} logo`}></i>}
          <div className="skill-name">{skill.name}</div>
          <div className="skill-level">
            {language === 'french' ? skill.levelFr : skill.levelEn}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="portfolio-section skills-cont">
      <h3>{language === 'french' ? 'Compétences Informatiques' : 'Software Skills'}</h3>
      
      <h4>{language === 'french' ? 'Machine Learning' : 'Machine Learning'}</h4>
      {renderSkills(skills.machineLearning)}

      
      <h4>{language === 'french' ? 'Data' : 'Data'}</h4>
      {renderSkills(skills.dataViz)}
      
      
      
      <h4>{language === 'french' ? 'Web' : 'Web'}</h4>
      {renderSkills(skills.web)}

      <h4>{language === 'french' ? 'Programmation' : 'Programming'}</h4>
      {renderSkills(skills.programming)}
    </div>
  );
};

export default SkillsComponent;