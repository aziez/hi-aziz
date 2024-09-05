"use client";
import Scene from "@/components/hero/Scene";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
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

      <div className="absolute h-full w-full">
        <Scene3D />
      </div>
      <div className="container">
        <div className="h-[10rem] flex items-center justify-center">
          <TextHoverEffect text="HELLO" automatic duration={100} />
        </div>
        {/* <h1 className="md:text-9xl font-extrabold text-3xl lg:text-7xl text-center text-white">
          HELLO
        </h1> */}
        <Cover>
          <h2 className="text-xl md:text-2xl font-extrabold">
            Hi...👋🏻👋🏻 Im Aziez..👨🏻
          </h2>
        </Cover>
        <TextGenerateEffect
          filter={true}
          className="text-white font-mono text-pretty my-5"
          words={"Front end Web Developer | Full Stack Javascript"}
        />
        {/* <p className="text-white font-mono text-md">
          Dedicated to pushing the boundaries of design and functionality to
          craft user-centric web experiences that captivate and leave a lasting
          impression.
        </p> */}

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
