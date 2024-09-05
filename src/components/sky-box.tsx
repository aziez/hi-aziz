"use client";

import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

const SkyBox = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  //Change the texture to single cubemap images
  const texture = loader.load([
    "/skybox/Right.jpg",
    "/skybox/Left.jpg",
    "/skybox/Top.jpg",
    "/skybox/Bottom.jpg",
    "/skybox/Back.jpg",
    "/skybox/Front.jpg",
  ]);

  scene.background = texture;

  return null;
};

export default SkyBox;
