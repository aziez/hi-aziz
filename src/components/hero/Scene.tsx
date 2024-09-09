"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import Model from "./model";
import { SparklesCore } from "../ui/sparkles";
import Cursor3D from "../cursor3D";
import { Perf } from "r3f-perf";

export default function Scene() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Canvas linear dpr={3}>
      {/* <Perf position="top-left" /> */}

      <rectAreaLight
        position={[0, 0, 0]}
        color={"#ffffff"}
        width={2}
        height={0.02}
        frustumCulled={false}
      />
      <ambientLight castShadow intensity={1} position={[-0.38, 0.18, -0.38]} />
      <pointLight
        position={[0, 0.08, 0.46]}
        intensity={10}
        color={"#ff3838"}
        castShadow={true}
        distance={10}
      />
      <Center position={[0, 1, 0]}>
        <Suspense fallback={null}>
          <Model scrollY={scrollY} />
        </Suspense>
      </Center>

      <OrbitControls
        target={[0, 1, 0]}
        autoRotate
        minPolarAngle={0.2}
        maxPolarAngle={1.22}
      />
      <Cursor3D />
    </Canvas>
  );
}
