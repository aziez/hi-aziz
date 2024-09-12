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
import React from "react";

const Scene3D = dynamic(() => import("@/components/hero/Scene"), {
  ssr: false,
});

export function Hero() {
  return (
    <div className="h-screen p-4 relative w-full bg-black flex flex-col items-center justify-center gap-4 text-center">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="absolute h-full w-full z-0">
        <Scene3D />
      </div>
      <div className="container">
        <div className="h-[10rem] flex items-center justify-center">
          <TextHoverEffect text="HELLO" automatic duration={100} />
        </div>
        <LetterPullup
          delay={0.3}
          words="HI... M ABDUL AZIZ"
          className="text-xl md:text-2xl font-extrabold text-white"
        />

        <div className="flex flex-col gap-0 space-y-0 mb-4 items-center justify-center">
          <HyperText
            duration={30}
            className="text-white font-mono text-md"
            text="FRONT END DEVELOPER"
          />
          <HyperText
            className="text-white font-mono text-md"
            text="FULL STACK JAVASCRIPT"
          />
        </div>
        <BlurIn
          className="text-white font-mono text-md mb-4 w-full"
          word="Dedicated to pushing the boundaries of design and functionality to
          craft user-centric web experiences that captivate and leave a lasting
          impression."
        />

        <Button asChild className="h-12 relative w-48 mx-5">
          <Link
            href="https://1drv.ms/b/s!Am7mTXvg_uCXhOFbGUd3L1NNwZ9uYA?embed=1&em=2"
            target="_blank"
          >
            <BorderBeam /> My Resume
          </Link>
        </Button>
      </div>
    </div>
  );
}
