    
import React, { createContext, useState, useContext } from 'react';

    const LanguageContext = createContext();

    export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'english');

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
        {children}
        </LanguageContext.Provider>
    );
    };

    export const useLanguage = () => useContext(LanguageContext);
