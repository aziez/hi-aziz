"use client";
import HologramCharacter from "@/components/about/holo";
import InfoCard from "@/components/about/info-card";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { motion } from "framer-motion";

export function Project() {
  return (
    <section id="project">
      <div className="container">
        <InfoCard />
      </div>
    </section>
  );
}
