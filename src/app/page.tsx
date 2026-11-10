import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { Sidebar } from "@/components/layout/Sidebar";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";

export default function HomePage() {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <MobileNav />
      <Container className="min-h-screen px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-10 xl:gap-16">
          <Sidebar />
          <main
            id="content"
            className="pt-16 lg:w-[52%] lg:py-24 lg:pt-24"
          >
            <About />
            <Experience />
            <Projects />
            <Footer />
          </main>
        </div>
      </Container>
    </>
  );
}
