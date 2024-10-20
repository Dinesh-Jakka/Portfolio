import React, { Component } from 'react';
import './index.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        // Adding the scroll event listener
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        // Removing the scroll event listener
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const header = document.getElementById('nav');
        const prevComponent = header.previousElementSibling;
        const prevHeight = prevComponent ? prevComponent.offsetHeight : 0;

        // Set sticky class based on scroll position
        this.setState({ isSticky: window.scrollY > prevHeight });

        // Highlight active nav link
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50; // Offset for fixed navbar
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove('active-nav-item');
                    if (link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active-nav-item');
                    }
                });
            }
        });
    }

    render() {
        const { isSticky } = this.state;

        return (
            <header id="nav" className={`navbar ${isSticky ? 'sticky' : ''}`}>
                <nav role="navigation" className="nav-menu">
                    <a href="#education" className="nav-link">Education</a>
                    <a href="#skill-proficiency" className="nav-link">Skill Proficiency</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#certificates" className="nav-link">Certificates</a>
                </nav>
                <div className="w-nav-overlay" id="w-nav-overlay-0" />
            </header>
        );
    }
}

export default Header;
