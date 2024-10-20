import ProfileSection from './components/ProfileSection'
import Header from './components/Header'
import EducationSection from './components/EducationSection'; 
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import CerticatesSection from './components/CertificatesSection'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <ProfileSection/>
      <Header/>
      <section id="education"><EducationSection /></section>
      <section id="skill-proficiency"><SkillsSection/></section>
      <section id="projects"><ProjectsSection/></section>
      <section id="certificates"><CerticatesSection/></section>
      <Footer/>
    </div>
  );
}

export default App;
