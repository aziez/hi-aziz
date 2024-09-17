import SmoothScrollLayout from "@/components/ui/smoth-scroll";
import { Hero } from "@/layouts/Hero/page";
import PageWrapper from "./page-wrapper";
import { About } from "@/layouts/About/page";

export default function Home() {
  return (
    <SmoothScrollLayout>
      <Hero />

      <main className="flex min-h-screen flex-col items-center justify-between p-8 text-center">
        <PageWrapper>
          <h1 className="text-4xl lg:text-5xl font-bebas">ABOUT</h1>
          <About />
        </PageWrapper>
      </main>
    </SmoothScrollLayout>
  );
}
