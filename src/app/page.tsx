import SmoothScrollLayout from "@/components/ui/smoth-scroll";
import { Hero } from "@/layouts/Hero/page";
import PageWrapper from "./page-wrapper";
import { About } from "@/layouts/About/page";

export default function Home() {
  return (
    <SmoothScrollLayout>
      <Hero />

      <main className="flex min-h-screen flex-col items-center justify-between">
        <PageWrapper>
          <About />
        </PageWrapper>
      </main>
    </SmoothScrollLayout>
  );
}
