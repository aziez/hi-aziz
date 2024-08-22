"use client";
import React, { useRef } from "react";
import { extend } from "@react-three/fiber";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { TextGenerateEffect } from "./ui/text-generate-effect";

extend({ Box, OrbitControls });

function AnimatedBox({ scrollY }: { scrollY: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = scrollY / 1000;
    meshRef.current.rotation.y = scrollY / 100;
    meshRef.current.position.y = -scrollY / 100 + viewport.height / 5;
  });

  return (
    <Box ref={meshRef} args={[2, 2, 2]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#48ff00" />
    </Box>
  );
}

function Scene({ scrollY }: { scrollY: number }) {
  return (
    <div className="relative h-screen flex flex-col sm:flex-row">
      <Canvas className="md:basis-1/2 absolute bg-gray-900">
        <ambientLight intensity={1} />
        <pointLight position={[0, 3, 0]} intensity={10} />
        <AnimatedBox scrollY={scrollY} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
        />
      </Canvas>
      <div className="md:basis-1/2">
        {/* <h1 className="text-9xl font-extrabold font-mono">Haloo im Aziz</h1> */}
        <TextGenerateEffect
          filter={true}
          className="text-xl font-extrabold"
          words={`<h1>Hello I'm Aziez..👨🏻</h1>`}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ad id amet earum cumque in obcaecati, odio omnis accusamus
          exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequatur ad id amet earum cumque in obcaecati, odio omnis
          accusamus exercitationem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur ad id amet earum cumque in obcaecati,
          odio omnis accusamus exercitationem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur ad id amet earum cumque in
          obcaecati, odio omnis accusamus exercitationem. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Consequatur ad id amet earum cumque
          in obcaecati, odio omnis accusamus exercitationem. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Consequatur ad id amet earum
          cumque in obcaecati, odio omnis accusamus exercitationem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequatur ad id amet
          earum cumque in obcaecati, odio omnis accusamus exercitationem. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Consequatur ad id
          amet earum cumque in obcaecati, odio omnis accusamus exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ad id amet earum cumque in obcaecati, odio omnis accusamus
          exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequatur ad id amet earum cumque in obcaecati, odio omnis
          accusamus exercitationem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur ad id amet earum cumque in obcaecati,
          odio omnis accusamus exercitationem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur ad id amet earum cumque in
          obcaecati, odio omnis accusamus exercitationem. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Consequatur ad id amet earum cumque
          in obcaecati, odio omnis accusamus exercitationem. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Consequatur ad id amet earum
          cumque in obcaecati, odio omnis accusamus exercitationem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequatur ad id amet
          earum cumque in obcaecati, odio omnis accusamus exercitationem. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Consequatur ad id
          amet earum cumque in obcaecati, odio omnis accusamus exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ad id amet earum cumque in obcaecati, odio omnis accusamus
          exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequatur ad id amet earum cumque in obcaecati, odio omnis
          accusamus exercitationem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur ad id amet earum cumque in obcaecati,
          odio omnis accusamus exercitationem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur ad id amet earum cumque in
          obcaecati, odio omnis accusamus exercitationem. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Consequatur ad id amet earum cumque
          in obcaecati, odio omnis accusamus exercitationem. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Consequatur ad id amet earum
          cumque in obcaecati, odio omnis accusamus exercitationem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequatur ad id amet
          earum cumque in obcaecati, odio omnis accusamus exercitationem. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Consequatur ad id
          amet earum cumque in obcaecati, odio omnis accusamus exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ad id amet earum cumque in obcaecati, odio omnis accusamus
          exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequatur ad id amet earum cumque in obcaecati, odio omnis
          accusamus exercitationem. ad id amet earum cumque in obcaecati, odio
          omnis accusamus exercitationem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur ad id amet earum cumque in obcaecati,
          odio omnis accusamus exercitationem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur ad id amet earum cumque in
          obcaecati, odio omnis accusamus exercitationem. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Consequatur ad id amet earum cumque
          in obcaecati, odio omnis accusamus exercitationem. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Consequatur ad id amet earum
          cumque in obcaecati, odio omnis accusamus exercitationem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequatur ad id amet
          earum cumque in obcaecati, odio omnis accusamus exercitationem. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Consequatur ad id
          amet earum cumque in obcaecati, odio omnis accusamus exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ad id amet earum cumque in obcaecati, odio omnis accusamus
          exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequatur ad id amet earum cumque in obcaecati, odio omnis
          accusamus exercitationem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur ad id amet earum cumque in obcaecati,
          odio omnis accusamus exercitationem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur ad id amet earum cumque in
          obcaecati, odio omnis accusamus exercitationem. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Consequatur ad id amet earum cumque
          in obcaecati, odio omnis accusamus exercitationem. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Consequatur ad id amet earum
          cumque in obcaecati, odio omnis accusamus exercitationem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequatur ad id amet
          earum cumque in obcaecati, odio omnis accusamus exercitationem. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Consequatur ad id
          amet earum cumque in obcaecati, odio omnis accusamus exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ad id amet earum cumque in obcaecati, odio omnis accusamus
          exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequatur ad id amet earum cumque in obcaecati, odio omnis
          accusamus exercitationem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur ad id amet earum cumque in obcaecati,
          odio omnis accusamus exercitationem.
        </p>
      </div>
    </div>
  );
}

export default function ScrollAnimation() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <Scene scrollY={scrollY} />;
}
