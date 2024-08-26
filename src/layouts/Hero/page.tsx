"use client";
import Scene from "@/components/Scene";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { BorderBeam } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import dynamic from "next/dynamic";
import React from "react";

const Scene3D = dynamic(() => import("@/components/Scene"), { ssr: false });

export function Hero() {
  return (
    <div className="h-screen p-4 relative w-full bg-black flex flex-col items-center justify-center gap-4 overflow-hidden text-center">
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
      <div className="container space-y-8 pt-10">
        <h1 className="md:text-9xl font-extrabold text-3xl lg:text-7xl text-center text-white">
          HELLO
        </h1>
        <Cover>
          <h2 className="text-2xl font-extrabold">Hi...👋🏻👋🏻 Im Aziez..👨🏻</h2>
        </Cover>
        <TextGenerateEffect
          filter={true}
          className="text-white font-mono text-pretty"
          words={"Front end Web Developer | Full Stack Javascript"}
        />
        <p className="text-white font-mono text-clip">
          Dedicated to pushing the boundaries of design and functionality to
          craft user-centric web experiences that captivate and leave a lasting
          impression.
        </p>
        <Button className="h-12 relative w-48">
          <BorderBeam /> My Resume
        </Button>
      </div>
    </div>
  );
}
