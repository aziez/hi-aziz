"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const InfoCard = () => {
  const skills = [
    { name: "Next.js", value: 90 },
    { name: "JavaScript", value: 95 },
    { name: "HTML + CSS", value: 95 },
    { name: "Ionic/Angular", value: 70 },
    { name: "WebGL", value: 80 },
  ];
  return (
    <>
      <h1 className="text-4xl lg:text-7xl font-mono font-extrabold text-center text-blue-700 mb-8">
        ABOUT
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-black  text-white border-blue-500">
          <CardHeader>
            <CardTitle className="flex flex-col sm:flex-row items-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full mb-4 sm:mb-0 sm:mr-4"></div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl">M. Abdul Aziz</h2>
                <p className="text-sm">Age: 26 | From: Indonesia</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl mb-4">SKILLS</h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <Progress
                  value={skill.value}
                  className="h-2 bg-blue-600 text-white from-gray-800 to-blue-700 cursor-progress"
                />
              </div>
            ))}
            <h3 className="text-xl mt-6 mb-4">ABOUT</h3>
            <p className="text-sm mb-2">
              As a skilled Full-Stack Developer, I bring extensive expertise in
              Front-End technologies, including Next.js and TypeScript. My
              journey involves creating responsive web applications, optimizing
              site performance, and enhancing SEO. I’m no stranger to
              integrating third-party services and deploying applications on
              Ubuntu servers. My code? Always clean and maintainable, adhering
              to high accessibility standards.
            </p>
            <p className="text-sm mb-2">
              But wait, there’s more! Beyond development, I’ve dabbled in IT
              Support. Think advanced technical troubleshooting, hardware and
              software management, and network security enhancements. I’m the
              go-to person for system maintenance and data backup and recovery.
            </p>
            <p className="text-sm">Let’s build something great together! .✈️</p>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default InfoCard;
