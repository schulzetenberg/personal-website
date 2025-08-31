import { FullPageHeader } from '@/components/FullPageHeader';
import { ProjectsSection } from '@/components/ProjectsSection';
import { InstagramSection } from '@/components/InstagramSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <FullPageHeader />

      <section className="projects-section">
        <ProjectsSection />
      </section>

      <section className="instafeed-section">
        <InstagramSection />
      </section>

      <Footer />
    </main>
  );
}
