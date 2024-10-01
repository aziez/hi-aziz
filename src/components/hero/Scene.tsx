"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  Environment,
  Html,
  OrbitControls,
  SpotLight,
  useProgress,
} from "@react-three/drei";
import ModelAvatar from "@/webGL/Avatar";
// import HiAziz from "@/webGL/Hi-Aziz";
import Model from "./model";
import Cursor3D from "../cursor3D";
import { Perf } from "r3f-perf";
import dynamic from "next/dynamic";

const HiAziz = dynamic(() => import("@/webGL/Hi-Aziz"), {
  ssr: false,
});

export default function Scene() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <Canvas linear dpr={3} camera={{ near: 0.1, far: 300, fov: 60 }}>
    <Canvas
      camera={{ position: [0, 1.5, 3], fov: 50 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* <Perf position="top-left" /> */}

      <Environment preset="sunset" />
      <ambientLight intensity={2} />
      {/* Main directional light (simulating sun) */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Fill light */}
      <pointLight position={[-5, 0, -5]} intensity={2} />
      {/* Spotlight for dramatic effect */}
      <SpotLight
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        distance={6}
        castShadow
      />
      <Center position={[0, -2, 0]} scale={0.8}>
        <HiAziz play={true} />
      </Center>

      <OrbitControls
        target={[0, -2, 0]}
        autoRotate
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
