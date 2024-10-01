"use client";
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
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Suspense } from "react";
import { DATA } from "@/data/resume";
import ScrollAnimated from "@/components/scroll-animated";
import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

function Loader() {
  const { progress } = useProgress();

  return (
    <div className="flex flex-col items-center justify-evenly h-screen space-y-4">
      <div className="motion">
        <motion.div
          className="w-16 h-16 border-t-8 border-red-500 rounded-full animate-spin"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 1,
          }}
        />
        <motion.div
          className="text-2xl font-bold text-red-500"
          animate={{ opacity: [0, 1], y: [10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {progress.toFixed(0)}%
        </motion.div>
      </div>
      <div></div>
    </div>
  );
}

const Scene3D = dynamic(() => import("@/components/hero/Scene"), {
  ssr: false,
  loading: () => <Loader />,
});

export function Hero() {
  const name = DATA.name;
  return (
    <div className="h-screen p-4 relative w-full flex flex-col items-center justify-center gap-4 text-center">
      <div className="absolute h-full w-full z-0 overflow-hidden">
        <Scene3D />
      </div>
      <div className="container">
        <div className="h-[10rem] flex flex-col items-center justify-center z-10">
          <TextHoverEffect text="HELLO" automatic duration={100} />
        </div>
        <LetterPullup
          delay={0.3}
          words={`Hi...I'm ${name.toString()}`}
          className="text-xl md:text-7xl  text-white font-bree-serif"
        />
        <BlurIn
          className="text-white font-jakarta text-md my-4 w-full md:text-xl"
          word={DATA.description}
        />

        <Button asChild className="h-12 relative w-48 mx-5">
          <Link href={DATA.resumeUrl} target="_blank">
            <BorderBeam /> My Resume
          </Link>
        </Button>
      </div>
      <div className="absolute bottom-0">
        <ScrollAnimated targetId="about" text="about" />
      </div>
    </div>
  );
}
