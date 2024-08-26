import SmoothScrollLayout from "@/components/ui/smoth-scroll";
import { Hero } from "@/layouts/Hero/page";
import PageWrapper from "./page-wrapper";

export default function Home() {
  return (
    <SmoothScrollLayout>
      <Hero />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <PageWrapper>
          <h1>helloooo im content </h1>
          <h1>helloooo im content </h1>
          <h1>helloooo im content </h1>
          <h1>helloooo im content </h1>
          <h1>helloooo im content </h1>
          <h1>helloooo im content </h1>
        </PageWrapper>
      </main>
    </SmoothScrollLayout>
  );
}
