import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; 
import '../styles/Navbar.css';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = React.useState(false);
  const { language, changeLanguage } = useLanguage(); 
  const location = useLocation();
  const navbarRef = React.useRef(null); 

  React.useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpandNavbar(false);
      }
    }

    function handleScroll() {
      if (expandNavbar) {
        setExpandNavbar(false);
      }
    }

    if (expandNavbar) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [expandNavbar]);

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <div className={`navbar ${expandNavbar ? 'open' : 'close'}`} ref={navbarRef}>
      <div className="links">
        <Link to="/" className={location.pathname === '/' || location.pathname.startsWith('/project') ? 'active' : ''}>
          {language === 'english' ? 'Home' : 'Accueil'}
        </Link>
        <Link to="/experience" className={location.pathname.startsWith('/experience') ? 'active' : ''}>
          {language === 'english' ? 'Experience' : 'Expérience'}
        </Link>
        <Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>
          {language === 'english' ? 'Education' : 'Éducation'}
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          {language === 'english' ? 'Contact Me' : 'Me contacter'}
        </Link>
      </div>
      <div className="languageSelector">
        <select value={language} onChange={handleLanguageChange}>
          <option value="english">English</option>
          <option value="french">Français</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;