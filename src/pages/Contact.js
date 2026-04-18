import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Contact.css";
import { useLanguage } from "../components/LanguageContext";

function Contact() {
  const { language } = useLanguage(); 

  const contactList = [
    {
      href: "https://www.linkedin.com/in/cyril-kfouri/",
      icon: <LinkedInIcon className="contact-icon" />,
      text: "LinkedIn"
    },
    {
      href: "tel:+33640677498",
      icon: <PhoneIcon className="contact-icon" />,
      text: "+33 6 40 67 74 98"
    },
    {
      href: "mailto:cyrilkfouri@gmail.com",
      icon: <EmailIcon className="contact-icon" />,
      text: "cyrilkfouri@gmail.com"
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>{language === 'french' ? 'Me contacter' : 'Contact Me'}</h1>
        <div className="contact-info">
          {contactList.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              {contact.icon}
              <p>{contact.text}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
