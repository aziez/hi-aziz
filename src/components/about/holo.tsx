import Scene from "../hero/Scene";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Circle, SpotLight } from "@react-three/drei";
import Model from "../hero/model";
import * as THREE from "three";

const HologramCharacter = () => {
  const groupRef = useRef<THREE.Group>(null);
  const hologramRef = useRef<THREE.Mesh>(null);
  const planeRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
    if (hologramRef.current) {
      hologramRef.current.rotation.y += delta * 0.8;
    }
  });

  useFrame(() => {
    if (!groupRef.current) return;
    const baseY = viewport.width < 768 ? 10 : 20;
    const newY = baseY - scrollY / 100;
    groupRef.current.position.y = newY;
  });

  return (
    <group
      ref={groupRef}
      position={[0, 0, 0]}
      castShadow={false}
      visible={true}
    >
      <mesh ref={hologramRef} position={[0, 0, 0]} scale={[1.5, 2, 1.5]}>
        <cylinderGeometry args={[0.5, 0.5, 2, 32, 10, true]} />
        <meshBasicMaterial color="#7000B6" transparent wireframe />
      </mesh>
      <group position={[0, -2, 0]} castShadow>
        <Model scrollY={0} />
      </group>

      {/* Round plane to receive shadows */}

      {/* Top-right light for shadow casting */}

      {/* Ambient light for overall scene brightness */}
      <ambientLight intensity={0.5} />
      <SpotLight
        castShadow
        position={[0, 3, 2]}
        angle={0.6}
        penumbra={1}
        intensity={4}
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
        rotation={[0.05357053961540121, 0.7489488531899338, 2.3645154891044324]}
      >
        <Circle
          ref={planeRef}
          scale={0.8}
          args={[2.5, 32]} // Radius and segments
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -2, 0]} // Slightly below the model
          receiveShadow
          castShadow={true}
        >
          <meshStandardMaterial color="#1E3A8A" transparent opacity={0.5} />
        </Circle>
      </SpotLight>
      <shadowMaterial
        color={"#1c1c1c"}
        visible={true}
        opacity={1}
        alphaHash={true}
        blendColor={"#141414"}
      />
    </group>
  );
};

export default HologramCharacter;
