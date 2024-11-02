import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGraduationCap, FaRegNewspaper,FaAngleDoubleDown } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import './index.css';

const ProfileSection = () => {
  const [href, setHref] = useState('#nav');

    const updateHref = () => {
        if (window.innerWidth < 768) { // Example breakpoint for mobile
            setHref('#education'); // Change to your desired mobile href
        } else {
            setHref('#nav'); // Default href for larger screens
        }
    };

    useEffect(() => {
        updateHref(); // Set initial href
        window.addEventListener('resize', updateHref);
        return () => window.removeEventListener('resize', updateHref); // Cleanup listener
    }, []);

  return (
    <div className="profile-section">
      <div className="profile-container">
        <img 
          src="/images/profile1.jpg"
          alt="Profile"
          className="profile-image"
        />
        <h1 className="profile-name">Dinesh Jakka</h1>

        <div className="user-details">
          <div className="detail-item">
            <IoMdMail className="profile-icon" />
            <a href="mailto:ddinesh.jakka@gmail.com" className="email-item" target="_blank" rel="noreferrer">
              <p className="detail-text">ddinesh.jakka@gmail.com</p>
            </a>
           
          </div>

          <div className="detail-item">
            <FaGraduationCap className="profile-icon"/>
            <p className="detail-text">Bachelor of Technology (2025)</p>
          </div>

          <div className="detail-item">
          <FaLocationDot className="profile-icon"/>
            <p className="detail-text">Telangana</p>
          </div>
        </div>

        <a href="https://www.linkedin.com/in/dinesh-jakka" className="linkedin-button" target="_blank" rel="noreferrer">
          <FaLinkedin className="profile-icon"/>
          LinkedIn 
          <MdArrowOutward />
        </a>

        <a href="https://www.canva.com/design/DAGTq0jxMqs/gk8aGdl6R5DGUystrsMVXg/view?utm_content=DAGTq0jxMqs&utm_campaign=designshare&utm_medium=link&utm_source=editor" className="resume-button" target="_blank" rel="noreferrer">
          <FaRegNewspaper className="profile-icon"/>
          Resume 
          <MdArrowOutward />
        </a>
      
      </div>

      <a href={href} className="nav-link scroll-down-animate">
            <h5 className="text-block">Scroll Down</h5>
            <FaAngleDoubleDown className='down-icon' />
        </a>
    </div>
  );
};

export default ProfileSection;