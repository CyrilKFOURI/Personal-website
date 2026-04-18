import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone"; 
import EmailIcon from "@material-ui/icons/Email"; 
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="copyright">
        <p>&copy; 2024 cyrilkfouri.com</p>
      </div>
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/cyril-kfouri/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="tel:+33640677498" target="_blank" rel="noopener noreferrer"> 
          <PhoneIcon />
        </a>
        <a href="mailto:cyrilkfouri@gmail.com" target="_blank" rel="noopener noreferrer"> 
          <EmailIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
