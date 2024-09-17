"use client";
import HologramCharacter from "@/components/about/holo";
import InfoCard from "@/components/about/info-card";
import Scene from "@/components/hero/Scene";
import BlurIn from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import HyperText from "@/components/ui/hyper-text";
import LetterPullup from "@/components/ui/latter-pull-up";
import { BorderBeam } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextHoverEffect } from "@/components/ui/text-hover";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

export function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2">
      <InfoCard />
      <Canvas className="hidden md:block">
        <HologramCharacter />
      </Canvas>
    </section>
  );
}
