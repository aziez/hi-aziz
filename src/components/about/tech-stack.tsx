import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import Marquee from "../ui/marquee";

export const TechStack = () => {
  const stack = [
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "Ionic Framework",
      src: "/images/logos/ionic.png",

      className: "h-10 w-24",
    },
    {
      title: "React",
      src: "/images/logos/react.png",
      className: "h-10 w-24",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",

      className: "h-10 w-8",
    },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",

      className: "h-10 w-10",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",
      className: "h-10 w-24",
    },
    {
      title: "Three.js",
      src: "/images/logos/three.webp",
      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-200">Tech Stack</h3>
      <Marquee className="[--duration:20s]">
        <div className="flex flex-wrap">
          {stack.map((item) => (
            <Image
              src={item.src}
              key={item.src}
              width={`200`}
              height={`200`}
              alt={item.title}
              className={twMerge("object-contain mr-4 mb-4", item.className)}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};
