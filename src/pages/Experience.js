import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useLanguage } from "../components/LanguageContext"; 
import { ExperienceListEng } from "../helpers/ExperienceListEng";
import { ExperienceListFr } from "../helpers/ExperienceListFr";
import "../styles/Experience.css";

function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { language } = useLanguage(); 
  const experienceList = language === 'french' ? ExperienceListFr : ExperienceListEng;
  const moreDetailsText = language === 'french' ? 'Plus de détails' : 'More Details';

  return (
    <div className="experience">
      <VerticalTimeline>
        {experienceList.length > 0 ? (
          experienceList.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={exp.date}
              icon={<img src={exp.image} alt="Company Logo" />}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{exp.location}</h4>
                  <p>{exp.subtitle}</p>
                </div>
                <Link to={`/experience/${index}`}>{moreDetailsText}</Link>
              </div>
            </VerticalTimelineElement>
          ))
        ) : (
          <p>No experiences found.</p>
        )}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
