import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export default function HiAziz({ play, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/hi-aziz.glb");
  const { actions } = useAnimations(animations, group);
  const [actionName, setActionName] = useState("Armature");

  // Refs for the neck and head bones
  const neckBone = useRef();
  const headBone = useRef();

  // State to store mouse position
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (actions) {
      if (play) {
        actions["Armature|mixamo.com|Layer0"]?.play();
      } else {
        actions["Armature|mixamo.com|Layer0"]?.stop();
      }
    }
  }, [actions, play]);

  // Find and store references to the neck and head bones
  useEffect(() => {
    const findBone = (boneName, startBone = nodes.Hips) => {
      let result = null;
      startBone.traverse((bone) => {
        if (bone.name === boneName) {
          result = bone;
        }
      });
      return result;
    };

    neckBone.current = findBone("Neck");
    headBone.current = findBone("Head");

    console.log("Neck bone:", neckBone.current);
    console.log("Head bone:", headBone.current);

    // Add mouse move event listener
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [nodes.Hips]);

  // Use frame to update bone rotations
  useFrame(() => {
    if (neckBone.current && headBone.current) {
      const neckRotation = new THREE.Euler(
        -mouse.y * 0.3,
        mouse.x * 0.3,
        0,
        "XYZ"
      );
      const headRotation = new THREE.Euler(
        -mouse.y * 0.5,
        mouse.x * 0.5,
        0,
        "XYZ"
      );

      neckBone.current.rotation.x = THREE.MathUtils.lerp(
        neckBone.current.rotation.x,
        neckRotation.x,
        1
      );
      neckBone.current.rotation.y = THREE.MathUtils.lerp(
        neckBone.current.rotation.y,
        neckRotation.y,
        1
      );
      headBone.current.rotation.x = THREE.MathUtils.lerp(
        headBone.current.rotation.x,
        headRotation.x,
        1
      );
      headBone.current.rotation.y = THREE.MathUtils.lerp(
        headBone.current.rotation.y,
        headRotation.y,
        1
      );
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.002"]}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.002"]}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials["Wolf3D_Body.002"]}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials["Wolf3D_Hair.002"]}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials["Wolf3D_Skin.002"]}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials["Wolf3D_Outfit_Bottom.002"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials["Wolf3D_Outfit_Footwear.002"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials["Wolf3D_Outfit_Top.002"]}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials["Wolf3D_Teeth.002"]}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/hi-aziz.glb");
