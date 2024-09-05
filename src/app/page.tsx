import SmoothScrollLayout from "@/components/ui/smoth-scroll";
import { Hero } from "@/layouts/Hero/page";
import PageWrapper from "./page-wrapper";
import AboutPage from "@/layouts/About/page";

export default function Home() {
  return (
    <SmoothScrollLayout>
      <Hero />

      {/* <main className="flex min-h-screen flex-col items-center justify-between">
        <PageWrapper>
          <AboutPage />
        </PageWrapper>
      </main> */}
    </SmoothScrollLayout>
  );
}
