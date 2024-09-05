"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Perf } from "r3f-perf";

function Box(props: JSX.IntrinsicElements["mesh"]) {
  const meshRef = useRef<Mesh>(null!);
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <>
      <Canvas>
        <Perf position="top-left" />
        <rectAreaLight position={[-1.36, 0.94, 2.34]} />
        <ambientLight
          intensity={0.5}
          position={[1.16, 0.68, 0.36]}
          scale={0}
          renderOrder={-0.02}
        />
        <spotLight position={[10, 8.84, 10]} angle={0.15} penumbra={1} />
        <pointLight
          position={[-1.32, 0.76, -0.36]}
          args={[undefined, 2.52, 1.66, 4.88]}
        />
        <Box position={[-1.2, -0.26, 1.16]} />
        <Box position={[-1.26, 0.18, -0.42]} />
      </Canvas>
    </>
  );
}
