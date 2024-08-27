// components/Cursor3D.tsx
"use client";
import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const Cursor3D: React.FC = () => {
  const cursorRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useFrame(() => {
    if (cursorRef.current) {
      cursorRef.current.position.x = (mousePosition.x * viewport.width) / 2;
      cursorRef.current.position.y = (mousePosition.y * viewport.height) / 2;
      cursorRef.current.position.z = 0;
    }
  });

  return (
    <Sphere ref={cursorRef} args={[0.05, 32, 32]}>
      <meshBasicMaterial color="white" />
    </Sphere>
  );
};

export default Cursor3D;
