import Navbar from "@/components/navigation/Navbar";
import { Hero } from "@/layouts/Hero/page";
import { About } from "@/layouts/About/page";
import Project from "@/layouts/Projects/Page";
import Experience from "@/layouts/Experience/page";
import ContactSection from "@/layouts/Contact/page";
import Footer from "./footer";
import FloatingCTA from "@/components/ui/floating-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="relative w-full block">
        <About />
        <Project />
        <Experience />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

