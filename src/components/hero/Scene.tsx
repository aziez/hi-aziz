"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import ModelAvatar from "@/webGL/Avatar";
import Model from "./model";
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
    <Canvas linear dpr={3} camera={{ near: 0.1, far: 300, fov: 60 }}>
      {/* <Perf position="top-left" /> */}

      <rectAreaLight
        position={[0, 0, 0]}
        color={"#ffffff"}
        width={2}
        height={0.02}
        frustumCulled={false}
      />
      <Environment near={1} far={1000} resolution={256} preset="warehouse" />
      <ambientLight intensity={0.3} color={"#ffddcc"} />
      <Center position={[0, 1, 0]}>
        <Suspense fallback={null}>
          <ModelAvatar scrollY={scrollY} />
        </Suspense>
      </Center>

      <OrbitControls
        target={[0, 1, 0]}
        // autoRotate
        minDistance={2}
        maxDistance={2}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={true}
        enablePan={true}
        zoomSpeed={0.3}
      />
    </Canvas>
  );
}
