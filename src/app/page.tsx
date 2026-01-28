import Scene from "@/components/canvas/Scene";
// Triggering fresh static build
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import SkillsSection from "@/components/sections/Skills";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            {/* 3D Scene Layer */}
            <Scene />

            {/* UI Layer */}
            <div className="relative z-10">
                <Navbar />
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </div>
        </main>
    );
}
