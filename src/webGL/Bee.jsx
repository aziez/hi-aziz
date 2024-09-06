"use client";

import React, { useEffect, forwardRef } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";
import usePlayerControls from "@/hooks/use-player-controler";

const ModelBee = forwardRef((props, ref) => {
  const group = React.useRef();
  const { scene, animations } = useGLTF("/Bee-transformed.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { forward, backward, left, right } = usePlayerControls();

  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions["_bee_hover"]) {
      actions["_bee_hover"].play();
    }
  }, [actions]);

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      position={[-1.5, -0.5, 0]}
      rotation={[0, -190, 0]}
      castShadow
    >
      <group ref={group} scale={0.05}>
        <group name="skeletal1" scale={0.01}>
          <primitive object={nodes.root_jnt2} />
        </group>
        <skinnedMesh
          name="1645859359680_0"
          geometry={nodes["1645859359680_0"].geometry}
          material={materials.mtl_bee41}
          skeleton={nodes["1645859359680_0"].skeleton}
          scale={0.01}
        />
      </group>
    </group>
  );
});

ModelBee.displayName = "ModelBee";

export default ModelBee;

useGLTF.preload("/Bee-transformed.glb");
