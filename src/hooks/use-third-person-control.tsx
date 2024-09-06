import React, { useRef, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3, Group, PerspectiveCamera } from "three";

interface ThirdPersonControlsProps {
  target: React.RefObject<Group>;
  cameraDistance?: number;
  cameraHeight?: number;
  movementSpeed?: number;
}

const ThirdPersonControls: React.FC<ThirdPersonControlsProps> = ({
  target,
  cameraDistance = 5,
  cameraHeight = 2,
  movementSpeed = 5,
}) => {
  const { camera } = useThree();
  const cameraRef = useRef<PerspectiveCamera>(camera as PerspectiveCamera);

  const [keys, setKeys] = useState({
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    w: false,
    s: false,
    a: false,
    d: false,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKeys((prevKeys) => ({ ...prevKeys, [event.key]: true }));
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setKeys((prevKeys) => ({ ...prevKeys, [event.key]: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame((state, delta) => {
    if (target.current) {
      const direction = new Vector3();

      if (keys.ArrowUp || keys.w) direction.z -= 1;
      if (keys.ArrowDown || keys.s) direction.z += 1;
      if (keys.ArrowLeft || keys.a) direction.x -= 1;
      if (keys.ArrowRight || keys.d) direction.x += 1;

      direction.normalize();
      direction.multiplyScalar(movementSpeed * delta);

      target.current.position.add(direction);

      if (direction.length() > 0) {
        target.current.lookAt(target.current.position.clone().add(direction));
      }

      // Update camera position
      const idealOffset = new Vector3(0, cameraHeight, cameraDistance);
      idealOffset.applyQuaternion(target.current.quaternion);
      idealOffset.add(target.current.position);

      const idealLookat = new Vector3(0, 0, -1);
      idealLookat.applyQuaternion(target.current.quaternion);
      idealLookat.add(target.current.position);

      const t = 1.0 - Math.pow(0.001, delta);

      cameraRef.current.position.lerp(idealOffset, t);
      cameraRef.current.lookAt(target.current.position);
    }
  });

  return null;
};

export default ThirdPersonControls;
