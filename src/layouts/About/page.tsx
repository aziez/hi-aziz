"use client";
import HologramCharacter from "@/components/about/holo";
import InfoCard from "@/components/about/info-card";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      // className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 py-16"
    >
      <div className="container">
        <InfoCard />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="h-[300px] md:h-[400px] bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          >
            <Canvas>
              <HologramCharacter />
            </Canvas>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}
