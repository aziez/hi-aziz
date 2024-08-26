"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface SmoothScrollLayoutProps {
  children: React.ReactNode;
}

const SmoothScrollLayout: React.FC<SmoothScrollLayoutProps> = ({
  children,
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX: scaleX }} />
      {children}
    </>
  );
};

export default SmoothScrollLayout;
