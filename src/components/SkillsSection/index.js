import React, { useState } from 'react';
import './index.css';

const skillsData = [
  { name: 'HTML', percent: 100, imgSrc: '/images/html.png' },
  { name: 'Bootstrap', percent: 99, imgSrc: 'images/bootstrap.png' },
  { name: 'Python', percent: 94, imgSrc: 'images/python.png' },
  { name: 'SQL', percent: 98, imgSrc: 'images/sql.png' },
  { name: 'JavaScript', percent: 99, imgSrc: 'images/javascript.png' },
  { name: 'Flexbox', percent: 98, imgSrc: 'images/flexbox.png' },
  { name: 'GIT', percent: 100, imgSrc: 'images/git.png' },
  { name: 'React JS', percent: 90, imgSrc: 'images/react-js.png' },
  { name: 'Node JS', percent: 93, imgSrc: 'images/node-js.png' },
  { name: 'DSA', percent: 65, imgSrc: 'images/dsa.png' },
];

const detailData = [
  { name: 'HTML', percent: 100, percentPractice: 99, imgSrc: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/portfolio/html.png' },
  { name: 'Bootstrap', percent: 100, percentPractice: 99, imgSrc: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/portfolio/bootstrap.png' },
  { name: 'Python', percent: 96, percentPractice: 93, imgSrc: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/portfolio/python.png' },
  { name: 'SQL', percent: 100, percentPractice: 97, imgSrc: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/portfolio/sql.png' },
  { name: 'JavaScript', percent: 100, percentPractice: 98, imgSrc: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/portfolio/javascript.png' },
  { name: 'Flexbox', percent: 100, percentPractice: 96, imgSrc: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/portfolio/flexbox.png' },
  { name: 'GIT', percent: 100, percentPractice: 100, imgSrc: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/portfolio/git.png' },
  { name: 'React JS', percent: 84, percentPractice: 96, imgSrc: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/portfolio/react-js.png' },
  { name: 'Node JS', percent: 88, percentPractice: 98, imgSrc: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/portfolio/node-js.png' },
  { name: 'DSA', percent: 69, percentPractice: 62, imgSrc: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/portfolio/dsa.png' },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className='skills-section-container'>
      <h1 className="heading">Skill Proficiency</h1>
      <div id="skill-profiency" className="skill-profiency">
        <div className="sp-tabs">
          
            <div className="tabs-menu" role="tablist">
              <a 
                className={`tab-link ${activeTab === 'Overview' ? 'w--current' : ''}`} 
                onClick={() => setActiveTab('Overview')} 
                role="tab" 
                aria-selected={activeTab === 'Overview'}
              >
                <h6>Over View</h6>
              </a>
              <a 
                className={`tab-link ${activeTab === 'Detail View' ? 'w--current' : ''}`} 
                onClick={() => setActiveTab('Detail View')} 
                role="tab" 
                aria-selected={activeTab === 'Detail View'}
              >
                <h6>Detail View</h6>
              </a>
            </div>
            <div className="tab-content">
              {activeTab === 'Overview' ? 
              (
                <div className="overview-content">
                <p className='msg'><span className='show-msg'>i</span>
                The Overview shows my overall skill percentage by combining the number of problems I've solved and my average marks in practice sets (in CCBP Nxtwave).
                </p>
            
                  {skillsData.map((skill, index) => (
                    <div 
                        key={skill.name} 
                        className="skill-item"
                        style={{
                          backgroundColor: index % 2 === 0 ? '#1e1e1e' : '#292929', // Different colors for items
                        }}
                    >
                      <div className="skill-info">
                        <div className='skill'>
                          <img loading="lazy" src={skill.imgSrc} alt={skill.name} className="skill-image" />
                          <h2 className="skill-name">{skill.name}</h2>
                        </div>
                        <p className="skill-percent">{skill.percent}%</p>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar" 
                          style={{ width: `${skill.percent}%`, background: getProgressBarColor(skill.percent) }}
                              />
                            </div>
                      </div>
                    ))}
                  </div>
              ) : 
              (
                <div>
                <p className='msg'><span className='show-msg'>i</span>
                The Detailed View breaks down each skill, showing how well I've done in solving problems and my average marks (in CCBP Nxtwave).
                </p>
                
                <table className="detail-table">
                    
                      <tr>
                        <th className="header-title">Skill Name</th>
                        <th className="header-title">Total Problems Solved</th>
                        <th className="header-title">Marks in Practice Sets</th>
                      </tr>
                    
                    
                      {detailData.map(skill => (
                        <tr key={skill.name} className="detail-view-row">
                          <td className="skill-name">
                            <img src={skill.imgSrc} alt={skill.name} className="skill-image" />
                            {skill.name}
                          </td>
                          <td className="skill-percent">{skill.percent}%</td>
                          <td className="skill-percent">{skill.percentPractice}%</td>
                        </tr>
                      ))}
                    
                  </table>
                  </div>
              )
              }
            </div>
          </div>
        
      </div>
    </div>
  );
};

const getProgressBarColor = (percent) => {
  if (percent >= 99) return 'linear-gradient(285.49deg, #46E3B7 0%, #C3EBE0 100%)';
  if (percent >= 95) return 'linear-gradient(285.49deg, #F7BE2B 0%, #FEF3D9 100%)';
  if (percent >= 90) return 'linear-gradient(105.32deg, #CAA2CA 25.75%, #BA2CB8 88.38%)';
  return 'linear-gradient(105.32deg, #FF4C4C 25.75%, #BA2CB8 88.38%)';
};

export default SkillsSection;
