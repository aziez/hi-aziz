import SmoothScrollLayout from "@/components/ui/smoth-scroll";
import { Hero } from "@/layouts/Hero/page";
import PageWrapper from "./page-wrapper";
import { About } from "@/layouts/About/page";
import Project from "@/layouts/Projects/Page";
import Experience from "@/components/work/work";
import Footer from "./footer";
import ContactSection from "@/components/contact/contact";

export default function Home() {
  return (
    <SmoothScrollLayout>
      <Hero />

      <main className="flex min-h-screen flex-col items-center justify-between  text-center">
        <PageWrapper>
          <About />
          <Project />
          <Experience />
          <ContactSection />
        </PageWrapper>
      </main>
      <Footer />
    </SmoothScrollLayout>
  );
}
