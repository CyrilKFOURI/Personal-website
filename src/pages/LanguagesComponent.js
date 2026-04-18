import React from 'react';
import "../styles/Home.css";
import { getLanguagesList } from "../helpers/LanguagesList";
import { useLocation } from 'react-router-dom';

const LanguagesComponent = () => {
  const location = useLocation();
  const lang = new URLSearchParams(location.search).get("lang") || localStorage.getItem('language') || 'english';

  const languages = getLanguagesList(lang);

  return (
    <div className="portfolio-section">
      <h3>{lang === 'french' ? 'Langues' : 'Languages'}</h3>
      <div id='languages' className="languages-container">
        {languages.map((language, index) => (
          <div className="language" key={index}>
            <div className="language-name">{language.name}</div>
            <div className="language-level">{language.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesComponent;
