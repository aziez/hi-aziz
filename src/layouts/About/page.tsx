"use client";
import { Canvas } from "@react-three/fiber";
import HologramCharacter from "@/components/about/holo";
import { SparklesCore } from "@/components/ui/sparkles";
import InfoCard from "@/components/about/info-card";
import { OrbitControls } from "@react-three/drei";
import dynamic from "next/dynamic";
import { Perf } from "r3f-perf";

const HoloScene = dynamic(() => import("@/components/about/holo"), {
  ssr: false,
});

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen h-full text-black overflow-x-hidden">
      <SparklesCore
        background="transparent"
        minSize={3}
        maxSize={8}
        particleDensity={5}
        className="w-full h-full absolute top-0 left-0"
        particleColor="#000000"
      />
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 h-[50vh] lg:h-auto relative">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            {/* <Perf position="top-left" /> */}

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <HoloScene />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              target={[0, 1.8, 0]}
              autoRotate
            />
          </Canvas>
        </div>
        <div className="lg:w-1/2 p-4 lg:p-8 overflow-y-auto">
          <InfoCard />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
