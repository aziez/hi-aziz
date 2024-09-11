"use client";
import SkyBox from "@/components/sky-box";
import SmoothScrollLayout from "@/components/ui/smoth-scroll";
import { Hero } from "@/layouts/Hero/page";
import {
  Center,
  Environment,
  Html,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import RoomModel from "@/webGL/Room";
import ModelBee from "@/webGL/Bee";
import ModelAvatar from "@/webGL/Avatar";
import { Suspense, useRef, useState } from "react";
import { Group } from "three";
import { Physics } from "@react-three/cannon";
import ThirdPersonControls from "@/hooks/use-third-person-control";

export default function Home() {
  const beeRef = useRef<Group>(null);
  const lightRef = useRef(null);
  const [loading, setLoading] = useState(true);

  function Loading() {
    const { progress } = useProgress();
    progress == 100 ? setLoading(false) : setLoading(true);
    return (
      <Html>
        <div className="loader" style={{ display: loading ? "none" : "block" }}>
          <div className="loader_spinner">
            <div className="loader_ring1" />
            <div className="loader_ring2" />
            <div className="loader_ring3" />
          </div>

          <div className="loader_text">Loading ...</div>
        </div>
      </Html>
    );
  }
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <ambientLight intensity={0.3} color={"#ffddcc"} />
        <directionalLight ref={lightRef} intensity={1} position={[5, 5, 5]} />
        <Environment near={1} far={1000} resolution={256} preset="warehouse" />
        <SkyBox />
        <Physics gravity={[0, -50, 0]}>
          <Suspense fallback={<Loading />}>
            <RoomModel rotation={[0, 0, 0]} />
            <ModelAvatar position={[-5, -1.5, 0]} rotation={[0, 160, 0]} />
            {/* <ThirdPersonControls target={beeRef} /> */}
          </Suspense>
        </Physics>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
