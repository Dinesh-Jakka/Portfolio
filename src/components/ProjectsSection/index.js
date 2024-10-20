import React from 'react';
import './index.css'; // Import your CSS for styling

const projects = [
  {
    date: 'Mar 2024',
    title: 'Rock Paper Scissors Game',
    description: 'Developed interactive Rock Paper Scissors game with modal rules display and dynamic scoring using React and Styled Components.',
    imageSrc: '/images/rock_paper_scissors_game.png',
    technologies: ['React JS', 'Node JS'],
    link: 'https://example.com/rock-paper-scissors' // Sample link
  },
  {
    date: 'Oct 2024',
    title: 'Nxt Trendz: Fashion Retail Website',
    description: 'Developed advanced e-commerce cart system with intuitive UX and robust management capabilities.',
    imageSrc: '/images/nxt_trendz_fashion_retail_website.png',
    technologies: ['React JS', 'Node JS'],
    link: 'https://example.com/nxt-trendz' // Sample link
  },
  {
    date: 'Mar 2024',
    title: 'Nxtwatch: Video Streaming Platform',
    description: 'Built Nxt Watch using React and Styled Components, showcasing responsive design, API-driven video content, authentication handling, and theme customization.',
    imageSrc: '/images/nxtwatch__video_streaming_platform.png',
    technologies: ['React JS', 'Node JS'],
    link: 'https://example.com/nxt-watch' // Sample link
  },
  {
    date: 'Mar 2024',
    title: 'Jobby: Video Streaming Platform',
    description: 'Built Nxt Watch using React and Styled Components, showcasing responsive design, API-driven video content, authentication handling, and theme customization.',
    imageSrc: '/images/jobby_sm.png',
    technologies: ['React JS', 'Node JS'],
    link: 'https://dineshjJobbyApp.ccbp.tech'
  },
];

const ProjectsSection = () => {
  return (
    <div id="your-projects" className="projects-section">
      <div className="section-title">Projects</div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageSrc} alt={project.title} className="project-image" loading="lazy" />
            <p className="project-date">{project.date}</p>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, index) => (
                <p key={index} className="tech-item">{tech}</p>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-button">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;