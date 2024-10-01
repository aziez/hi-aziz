import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DATA } from "@/data/resume";
import { TechStack } from "./tech-stack";

const InfoCard: React.FC = () => {
  const summaryParts = DATA.summary.trim().split("\n\n");
  const introduction = summaryParts[0];
  const skills = summaryParts[1]
    .split("\n")
    .filter((item) => item.trim() !== "");
  const conclusion = summaryParts.slice(2).join("\n\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 p-6 rounded-xl shadow-2xl max-w-4xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold mb-6 text-blue-400"
          >
            About Me
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-lg leading-relaxed"
          >
            {introduction}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <h4 className="text-xl font-semibold mb-4 text-blue-300">Skills</h4>
            <ul className="space-y-4">
              {skills.map((skill, index) => {
                const [title, details] = skill.split(":");
                return (
                  <li key={index} className="border-b border-gray-700 pb-4">
                    <h5 className="font-semibold text-lg mb-2">
                      {title.trim()}
                    </h5>
                    {details && (
                      <ul className="list-disc list-inside space-y-1 text-gray-300">
                        {details
                          .split("•")
                          .filter((item) => item.trim())
                          .map((item, itemIndex) => (
                            <li key={itemIndex}>{item.trim()}</li>
                          ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-300"
          >
            {conclusion.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="sticky top-8"
          >
            <Image
              alt="avatar"
              width={500}
              height={500}
              src="/me/2.jpeg"
              className="rounded-xl shadow-lg mb-6"
            />
            <TechStack />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoCard;
