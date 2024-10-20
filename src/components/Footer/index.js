import { FaLinkedin,FaTwitter,FaInstagram,FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import React from "react";
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="section-title">Stay Connected</h2>
        <div className="footer-container">
          <div className="footer-social">
            <a href="https://x.com/DineshJakka3" target="_blank" className="social-link" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/dinesh-jakka" target="_blank" className="social-link" rel="noopener noreferrer">
            <FaLinkedin  className="social-icon" />
            </a>
            <a href="https://www.instagram.com/dinesh_j05/" target="_blank" className="social-link" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
            </a>
            <a href="https://github.com/Dinesh-Jakka" target="_blank" className="social-link" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
            </a>
            <a href="https://leetcode.com/u/Dinesh_Jakka/" target="_blank" className="social-link" rel="noopener noreferrer">
            <SiLeetcode className="social-icon" />
            </a>
          </div>
          <div className="footer-credits">
            <p>&copy; 2024 Dinesh Jakka. All rights reserved.</p>
          </div>
        </div>
      </footer>

  );
};

export default Footer;
