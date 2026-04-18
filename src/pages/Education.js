import React, { useEffect } from 'react';
import SchoolIcon from '@material-ui/icons/School'; 
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useLanguage } from '../components/LanguageContext'; 
import { EducationListEng } from "../helpers/EducationListEng";
import { EducationListFr } from "../helpers/EducationListFr";

function Education() {
  const { language } = useLanguage(); 
  const educationList = language === 'french' ? EducationListFr : EducationListEng;

  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {educationList.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            date={edu.date} 
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">{edu.title}</h3>
            {edu.subtitle && <h4 className="vertical-timeline-element-subtitle">{edu.location}</h4>}
            <p>{edu.subtitle}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Education;
  