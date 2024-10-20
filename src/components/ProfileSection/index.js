import { FaLinkedin, FaGraduationCap, FaRegNewspaper,FaAngleDoubleDown } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import './index.css';

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile-container">
        <img 
          src="/images/profile.jpg"
          alt="Profile"
          className="profile-image"
        />
        <h1 className="profile-name">Dinesh Jakka</h1>

        <div className="user-details">
          <div className="detail-item">
            <IoMdMail />
            <a href="mailto:ddinesh.jakka@gmail.com" className="email-item" target="_blank" rel="noreferrer">
            <p className="detail-text">ddinesh.jakka@gmail.com</p>
            </a>
           
          </div>

          <div className="detail-item">
            <FaGraduationCap/>
            <p className="detail-text">Bachelor of Technology (2025)</p>
          </div>

          <div className="detail-item">
          <FaLocationDot />
            <p className="detail-text">Telangana</p>
          </div>
        </div>

        <a href="https://www.linkedin.com/in/dinesh-jakka" className="linkedin-button" target="_blank" rel="noreferrer">
          <FaLinkedin/>
          LinkedIn 
          <MdArrowOutward />
        </a>

        <a href="https://www.canva.com/design/DAGTq0jxMqs/gk8aGdl6R5DGUystrsMVXg/view?utm_content=DAGTq0jxMqs&utm_campaign=designshare&utm_medium=link&utm_source=editor" className="resume-button" target="_blank" rel="noreferrer">
          <FaRegNewspaper/>
          Resume 
          <MdArrowOutward />
        </a>
      
      </div>
      <div className="scroll-down-animate">
      <h5 className="text-block">Scroll Down</h5>
      <div className="w-embed">
        < FaAngleDoubleDown/>
      </div>
    </div>
    </div>
  );
};

export default ProfileSection;
