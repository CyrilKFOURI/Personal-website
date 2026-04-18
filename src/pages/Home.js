import React, { useEffect } from 'react';
import { useLanguage } from '../components/LanguageContext'; 
import '../styles/Home.css';
import SkillsComponent from './SkillsComponent';
import LanguagesComponent from './LanguagesComponent';

import Projects from './Projects';
import ProfilePic from '../assets/Cyril_Kfouri.png';

import HomeData from '../helpers/HomeData';

function Home() {
  const { language } = useLanguage(); 
  const content = HomeData[language] || HomeData.english;

  useEffect(() => { 
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <div className="about">
        <div className="CV">
          <a href={content.cv.file} target="_blank" rel="noopener noreferrer">{content.cv.downloadText}</a>
        </div>

        <img src={ProfilePic} alt="User Profile" />

        <h2>{content.profile.name}</h2>
        <div className="prompt">
          <p>{content.profile.description}</p>
        </div>
      </div>
      <div>
        
        <LanguagesComponent />
        <Projects />
        <SkillsComponent />
     
      </div>
    </div>
  );
}

export default Home;
