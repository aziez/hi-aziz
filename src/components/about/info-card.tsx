// InfoCard.tsx

"use client";
import { DATA } from "@/data/resume";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import dynamic from "next/dynamic";
import HologramCharacter from "./holo";
import { Canvas } from "@react-three/fiber";
import Marquee from "../ui/marquee";

const InfoCard: React.FC = () => {
  const summaryParts = DATA.summary.trim().split("\n\n");
  const introduction = summaryParts[0];
  const skills = summaryParts[1]
    .split("\n")
    .filter((item) => item.trim() !== "");
  const conclusion = summaryParts.slice(2).join("\n\n");

  return (
    <section className="w-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-md md:text-start  p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-xl"
      >
        <div className="flex flex-col md:flex-row ">
          <div className="basis1/2 max-w-full">
            <h2 className="text-3xl font-bold mb-6 text-gray-100">
              {DATA.name}
            </h2>
            <p className="mb-6 text-gray-300">{DATA.description}</p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-200">
              About Me
            </h3>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-gray-300"
            >
              {introduction}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 w-full"
            >
              <ol className="list-inside text-gray-300">
                {skills.map((skill, index) => {
                  const [title, details] = skill.split(":");
                  return (
                    <li key={index} className="mb-2 ">
                      <span className="font-semibold">{title.trim()}</span>
                      {details && (
                        <ul className="list-disc list-inside ml-4 mt-1">
                          {details
                            .split("•")
                            .filter((item) => item.trim())
                            .map((item, itemIndex) => (
                              <li key={itemIndex} className="mb-1">
                                {item.trim()}
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300"
            >
              {conclusion.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-2">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
          <div className="basis1/4">
            <img src="/me/2.jpeg" />
          </div>
        </div>

        <Marquee pauseOnHover className="[--duration:20s]">
          {DATA.skills.map((skils, index) => (
            <Badge key={index}>{skils}</Badge>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default InfoCard;
