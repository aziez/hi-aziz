import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("@/components/three-scene"), {
  ssr: false,
});
const ScrollAnimation = dynamic(() => import("@/components/scroll-animation"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <ThreeScene /> */}
      <ScrollAnimation />
    </main>
  );
}
