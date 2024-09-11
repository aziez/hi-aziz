import { useEffect, useState } from "react";

const usePlayerControls = () => {
  const [keys, setKeys] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  });

  const keyHandler = ({ type, key }: { type: string; key: string }) => {
    const action = type === "keydown";
    switch (key) {
      case "ArrowUp":
      case "w":
        setKeys((state) => ({ ...state, forward: action }));
        break;
      case "ArrowDown":
      case "s":
        setKeys((state) => ({ ...state, backward: action }));
        break;
      case "ArrowLeft":
      case "a":
        setKeys((state) => ({ ...state, left: action }));
        break;
      case "ArrowRight":
      case "d":
        setKeys((state) => ({ ...state, right: action }));
        break;
      case " ":
        setKeys((state) => ({ ...state, jump: action }));
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    window.addEventListener("keyup", keyHandler);

    return () => {
      window.removeEventListener("keydown", keyHandler);
      window.removeEventListener("keyup", keyHandler);
    };
  }, []);

  return keys;
};

export default usePlayerControls;
