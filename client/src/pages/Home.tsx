import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { resumeData } from "@/data/resumeData";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{resumeData.meta.title}</title>
        <meta name="description" content={resumeData.meta.description} />
        <meta property="og:title" content={resumeData.meta.title} />
        <meta property="og:description" content={resumeData.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={resumeData.meta.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="font-sans text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
