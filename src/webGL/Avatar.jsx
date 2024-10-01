"use client";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import usePlayerControls from "@/hooks/use-player-controler";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function ModelAvatar(props) {
  const group = useRef();
  const avatarRef = useRef();
  const { forward, backward, left, right } = usePlayerControls(); // Player controls (WASD/Arrow keys)

  const { nodes, materials, animations } = useGLTF("/avatar.glb");
  const { actions } = useAnimations(animations, group);

  const [actionName, setAction] = useState({
    action: "GesturePointing",
    during: false,
  });

  const speed = 0.05; // Walking speed
  const direction = new THREE.Vector3(); // Movement direction

  useEffect(() => {
    console.log(actions, "Aksi");
    // GestureCheering;
    // GestureClapping;
    // GestureDanceTwist;
    // GestureGreeting;
    // GesturePointing;
    // GestureWaving;
    // Idle;
    // Run;
    // Turn;
    // Walk;
    // WalkBackward;

    if (actions[actionName.action]) {
      actions[actionName.action].play();
      return () => actions[actionName.action].stop();
    }
  }, [actions, actionName.action]);

  //   useEffect(() => {
  //     let newActionName;
  //
  //     if (forward) {
  //       newActionName = "Run"; // Set to "Walk" if you have a slower animation
  //     } else if (backward) {
  //       newActionName = "WalkBackward";
  //     } else if (!backward && !forward && (left || right)) {
  //       newActionName = "Turn";
  //     } else {
  //       newActionName = "Idle";
  //     }
  //
  //     setAction({ action: newActionName, during: true });
  //   }, [backward, forward, left, right]);
  //
  //   useFrame(() => {
  //     if (avatarRef.current) {
  //       // Calculate movement direction based on the camera orientation
  //       direction.set(0, 0, 0);
  //       if (forward) direction.z = -1;
  //       if (backward) direction.z = 1;
  //       if (left) direction.x = -1;
  //       if (right) direction.x = 1;
  //
  //       direction.normalize().multiplyScalar(speed);
  //       avatarRef.current.position.add(direction);
  //     }
  //   });

  return (
    <>
      <group ref={avatarRef} {...props}>
        <group ref={group} dispose={null} scale={0.8}>
          <group name="Scene">
            <group name="skeleton_#7">
              <group name="msm_glasses_3">
                <skinnedMesh
                  name="msm_glasses_3_1"
                  geometry={nodes.msm_glasses_3_1.geometry}
                  material={materials.GlassRim_MTL}
                  skeleton={nodes.msm_glasses_3_1.skeleton}
                />
                <skinnedMesh
                  name="msm_glasses_3_2"
                  geometry={nodes.msm_glasses_3_2.geometry}
                  material={materials.Glass_MTL}
                  skeleton={nodes.msm_glasses_3_2.skeleton}
                />
              </group>
              <group name="msm_hair_hat_C">
                <skinnedMesh
                  name="msm_hair_hat_C_1"
                  geometry={nodes.msm_hair_hat_C_1.geometry}
                  material={materials.Jacket_MTL}
                  skeleton={nodes.msm_hair_hat_C_1.skeleton}
                />
                <skinnedMesh
                  name="msm_hair_hat_C_2"
                  geometry={nodes.msm_hair_hat_C_2.geometry}
                  material={materials.Collar_MTL}
                  skeleton={nodes.msm_hair_hat_C_2.skeleton}
                />
                <skinnedMesh
                  name="msm_hair_hat_C_3"
                  geometry={nodes.msm_hair_hat_C_3.geometry}
                  material={materials.Hair_MTL}
                  skeleton={nodes.msm_hair_hat_C_3.skeleton}
                />
              </group>
              <skinnedMesh
                name="msm_head_main"
                geometry={nodes.msm_head_main.geometry}
                material={materials.Skin_MTL}
                skeleton={nodes.msm_head_main.skeleton}
              />
              <group name="msm_pants_No3">
                <skinnedMesh
                  name="msm_pants_No3_1"
                  geometry={nodes.msm_pants_No3_1.geometry}
                  material={materials.Pants_MTL}
                  skeleton={nodes.msm_pants_No3_1.skeleton}
                />
                <skinnedMesh
                  name="msm_pants_No3_2"
                  geometry={nodes.msm_pants_No3_2.geometry}
                  material={materials.Jeans_Pockets_MTL}
                  skeleton={nodes.msm_pants_No3_2.skeleton}
                />
                <skinnedMesh
                  name="msm_pants_No3_3"
                  geometry={nodes.msm_pants_No3_3.geometry}
                  material={materials.Socks_MTL}
                  skeleton={nodes.msm_pants_No3_3.skeleton}
                />
              </group>
              <skinnedMesh
                name="msm_shoes_No16"
                geometry={nodes.msm_shoes_No16.geometry}
                material={materials.Shoes_MTL}
                skeleton={nodes.msm_shoes_No16.skeleton}
              />
              <group name="msm_top_No31">
                <skinnedMesh
                  name="msm_top_No31_1"
                  geometry={nodes.msm_top_No31_1.geometry}
                  material={materials.Skin_MTL}
                  skeleton={nodes.msm_top_No31_1.skeleton}
                />
                <skinnedMesh
                  name="msm_top_No31_2"
                  geometry={nodes.msm_top_No31_2.geometry}
                  material={materials.Sweater_MTL}
                  skeleton={nodes.msm_top_No31_2.skeleton}
                />
                <skinnedMesh
                  name="msm_top_No31_3"
                  geometry={nodes.msm_top_No31_3.geometry}
                  material={materials.Shirt_MTL}
                  skeleton={nodes.msm_top_No31_3.skeleton}
                />
                <skinnedMesh
                  name="msm_top_No31_4"
                  geometry={nodes.msm_top_No31_4.geometry}
                  material={materials.Jacket_MTL}
                  skeleton={nodes.msm_top_No31_4.skeleton}
                />
                <skinnedMesh
                  name="msm_top_No31_5"
                  geometry={nodes.msm_top_No31_5.geometry}
                  material={materials.Collar_MTL}
                  skeleton={nodes.msm_top_No31_5.skeleton}
                />
              </group>
              <primitive object={nodes.Root} />
            </group>
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/avatar.glb");
