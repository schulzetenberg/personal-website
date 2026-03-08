import { FullPageHeader } from '@/components/FullPageHeader';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { InstagramSection } from '@/components/InstagramSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <FullPageHeader />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <InstagramSection />

      <Footer />
    </main>
  );
}
