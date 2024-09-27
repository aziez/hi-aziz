import SmoothScrollLayout from "@/components/ui/smoth-scroll";
import { Hero } from "@/layouts/Hero/page";
import PageWrapper from "./page-wrapper";
import { About } from "@/layouts/About/page";
import { Project } from "@/layouts/Projects/Page";

export default function Home() {
  return (
    <SmoothScrollLayout>
      <Hero />

      <main className="flex min-h-screen flex-col items-center justify-between p-8 text-center">
        <PageWrapper>
          <About />
          <Project />
        </PageWrapper>
      </main>
    </SmoothScrollLayout>
  );
}
