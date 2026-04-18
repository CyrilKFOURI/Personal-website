import React from 'react';
import "../styles/Home.css";
import { useLanguage } from '../components/LanguageContext'; 
import HomeData from '../helpers/HomeData';

const MoreAboutMe = () => {
  const { language } = useLanguage(); 

  const { hobbies } = HomeData[language] || HomeData.english; 

  return (
    <div className="portfolio-section">
      <h3>{hobbies.title}</h3>
      <div className="more-aboutme-container">
        {hobbies.items.map((hobby, index) => (
          <div className="more-about-me-box">
            <h4>{hobby.name}</h4>
            <img src={hobby.image} alt={hobby.name} />
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreAboutMe;
