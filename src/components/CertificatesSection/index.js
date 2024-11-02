import React, { useState } from 'react';
import { PiCertificateBold } from "react-icons/pi";
import { MdArrowOutward } from "react-icons/md";
import './index.css';

const certificates = {
  fullStack: [
    {
      title: 'Node JS',
      link: 'https://certificates.ccbp.in/academy/node-js?id=OBKLPDOUAR',
    },
    {
      title: 'Developer Foundations',
      link: 'https://certificates.ccbp.in/academy/developer-foundations?id=GTBNDDATBA',
    },
    {
      title: 'JavaScript Essentials',
      link: 'https://certificates.ccbp.in/academy/javascript-essentials?id=ZOOWWUULUD',
    },
    // {
    //   title: 'Programming Foundations',
    //   link: 'https://certificates.ccbp.in/academy/programming-foundations-with-python?id=OJCFPPZKEY',
    // },
    {
      title: 'Introduction to Databases',
      link: 'https://certificates.ccbp.in/academy/introduction-to-databases?id=NIHJTYUGFE',
    },
    {
      title: 'React JS - Getting started',
      link: 'https://certificates.ccbp.in/academy/react-js?id=SJYUTJKQOQ',
    },
    {
      title: 'Build Your Own Static Website',
      link: 'https://certificates.ccbp.in/academy/static-website?id=MIBZLHAQVM',
    },
    {
      title: 'Build Your Own Responsive Website',
      link: 'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=RELFVXARRW',
    },
    {
      title: 'Responsive Web Design using Flexbox',
      link: 'https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=BLYLEFNVDV',
    },
    {
      title: 'Build Your Own Dynamic Web Application',
      link: 'https://certificates.ccbp.in/academy/dynamic-web-application?id=XANCEREZSZ',
    },
  ],
  machineLearning: [
    {
      title: 'Machine Learning - Specialization',
      link: 'https://coursera.org/share/2010d019e413596f011cc32e67e6a3b5',
    },
    {
      title: 'Programming Foundations',
      link: 'https://certificates.ccbp.in/academy/programming-foundations-with-python?id=OJCFPPZKEY',
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      link: 'https://coursera.org/share/140061fc30b934dfa0f89d93d01d951c',
    },
    {
      title: 'Advanced Learning Algorithms',
      link: 'https://coursera.org/share/be35b862f518d4d62baab73d75446b5b',
    },
    {
      title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
      link: 'https://coursera.org/share/07294f94e0ebf77abcb9104a0aed90f6',
    },
    {
      title: 'Machine Learning with Python: Foundations',
      link: 'https://www.linkedin.com/learning/certificates/7fabaa8e524a4b1ea74b5fa38e5b3ade408417f27ea1c1df65240822d18f7d2c?trk=share_certificate',
    },
    {
      title: 'Machine Learning with Python: Logistic Regression',
      link: 'https://www.linkedin.com/learning/certificates/bf34b231726681998e40b79e607cd73bafa63e9447108c784d11a7bdc036a8dc?trk=share_certificate',
    },
    {
      title: 'Machine Learning with Python: k-Means Clustering',
      link: 'https://www.linkedin.com/learning/certificates/9031a7644caec95750fce4d7aca3cbfd93418cb080ace1f3e1d3141073b1650c?trk=share_certificate',
    },
    {
      title:'Python for beginners - Learn all the basics of python',
      link:'https://www.udemy.com/certificate/UC-d1d45411-7558-4c51-8347-eac03f9db6bf/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
    },
  ],
  others: [
    {
      title:'Learning Excel Desktop (Microsoft 365)',
      link:'https://www.linkedin.com/learning/certificates/ea134809053c89fff87e8c1c586cbe547ac03121ae45180bc2eb0a4928996a7f?trk=share_certificate',
    },
    {
      title: 'Setting Priorities',
      link: 'https://certificates.ccbp.in/academy/xpm-4-0-fundamentals?id=SAJFIFIWBN',
    },
    {
      title:'Canva Essential Training',
      link:'https://www.linkedin.com/learning/certificates/843b1dbb24a19c09bc6ccf8e39ce8a6d3c77e9a90ba6abd8f507addecbc4c7ea?trk=share_certificate',
    },
    {
      title:'XPM 4.0 Fundamentals',
      link:'https://certificates.ccbp.in/academy/xpm-4-0-fundamentals?id=SAJFIFIWBN',
    },
    
  ],
};

const CertificatesSection = () => {
  const [activeTab, setActiveTab] = useState('fullStack'); // Correct case

  const renderCertificates = (category) => {
    return certificates[category].map(({ title, link }, index) => (
      <div key={index} className="certificate-card">
        <div className="certificate-logo-container">
          <PiCertificateBold className="certificate-logo" />
        </div>
        <div className="certificate-title">{title}</div>
        <a
          target="_blank"
          href={link}
          rel="noopener noreferrer"
          className="view-certificate-link"
        >
          <div className="view-certificate-text">
            View Certificate <MdArrowOutward/>
          </div>
        </a>
      </div>
    ));
  };

  return (
    <div id="certificates" className="certificates-section">
      <h2 className="section-title">Course Certificates</h2>
      <div className="tabs">
        <button
          className={activeTab === 'fullStack' ? 'active-tab' : 'tab-item'}
          onClick={() => setActiveTab('fullStack')}
        >
          Fullstack
        </button>
        <button
          className={activeTab === 'machineLearning' ? 'active-tab' : 'tab-item'}
          onClick={() => setActiveTab('machineLearning')}
        >
          Machine Learning
        </button>
        <button
          className={activeTab === 'others' ? 'active-tab' : 'tab-item'}
          onClick={() => setActiveTab('others')}
        >
          Others
        </button>
      </div>
      <div className="certificates-container">
        {renderCertificates(activeTab)}
      </div>
    </div>
  );
};

export default CertificatesSection;
