// src/components/EducationSection.js
import React from 'react';
import { Chrono } from 'react-chrono';
import { FaUniversity, FaGraduationCap, FaSchool } from 'react-icons/fa';
import './index.css'; // Import the CSS file

const EducationSection = () => {
  const timelineItemsList = [
    {
      id: '1',
      courseTitle: 'Bachelor of Technology',
      school: 'Rajiv Gandhi University of Knowledge Technologies, Basar',
      title: '2021 - 2025',
      cgpa: '8.2',
      icon: <FaGraduationCap />,
    },
    {
      id: '2',
      courseTitle: 'Pre-University Course',
      school: 'Rajiv Gandhi University of Knowledge Technologies, Basar',
      title: '2019 - 2021',
      cgpa: '8.18',
      icon: <FaUniversity />,
    },
    {
      id: '3',
      courseTitle: 'Secondary School Of Education',
      school: 'Telangana State Model School',
      title: '2018 - 2019',
      cgpa: '9.8',
      icon: <FaSchool />,
    },
  ];

  return (
    <div className='education-section-container'>
      <h1 className="section-title">My Educational Journey</h1>
      <div className="education-section" id='education'>
        <Chrono
          theme={{
            secondary: '#fff', // Light shade for secondary text
            cardBgColor: '#444', // Dark background for cards
            titleColor: '#fff', // White for titles
            titleColorActive: '#000', // Active title color
          }}
          items={timelineItemsList}
          mode="VERTICAL"
          disableToolbar
          itemHeight='120'
          scrollable={{ scrollbar: true }}
        >
          {timelineItemsList.map(item => (
            <div key={item.id} className="timeline-item">
              <div className='edu-card-head'>
                <div className='edu-icon'>
                  {item.icon}
                </div>
                <h2 className="course-title">{item.courseTitle}</h2>
              </div>
              <p className="school-name">{item.school}</p>
              <p className='year'>{item.title}</p>
              <p className="education-cgpa">CGPA: {item.cgpa}</p>
            </div>
          ))}
        </Chrono>
      </div>
    </div>
  );
};

export default EducationSection;
