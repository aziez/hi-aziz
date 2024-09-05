"use client";
import SkyBox from "@/components/sky-box";
import SmoothScrollLayout from "@/components/ui/smoth-scroll";
import { Hero } from "@/layouts/Hero/page";
import {
  CameraControls,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import RoomModel from "@/webGL/Room";
import ModelBee from "@/webGL/Bee";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export default function Home() {
  const cameraRef = useRef(null);
  const lightRef = useRef(null);

  //   useHelper(lightRef, DirectionalLightHelper, 1);

  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [1, 0, 0] }}>
        {/* Set the Perspective Camera */}
        {/* <PerspectiveCamera
          ref={cameraRef} // Reference to the camera
          makeDefault // This makes it the default camera
          fov={90} // Field of view
          position={[-3, 2, 0]} // Adjust position to view the RoomModel
        /> */}
        <RoomModel />
        {/* <CameraControls polarRotateSpeed={0.9} /> */}
        {/* Lighting and Environment */}
        <ambientLight intensity={0.3} color={"#ffddcc"} />
        <directionalLight ref={lightRef} intensity={1} position={[5, 5, 5]} />
        <Environment near={1} far={1000} resolution={256} preset="warehouse" />
        <SkyBox />
        {/* Your RoomModel */}
        <ModelBee />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
