import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

interface ScrollButtonProps {
  targetId: string;
  text?: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  targetId,
  text = "Scroll",
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const chevronVariants = {
    initial: { opacity: 0, y: 0 },
    animate: {
      opacity: [0, 1, 0],
      y: [0, 10, 20],
      transition: {
        duration: 2,
        times: [0, 0.5, 1],
        repeat: Infinity,
      },
    },
  };

  return (
    <Link
      href={`#${targetId}`}
      onClick={handleClick}
      className="inline-flex flex-col items-center text-white font-normal font-['Josefin_Sans',sans-serif] tracking-wider no-underline transition-opacity duration-300 hover:opacity-50"
    >
      <div className="relative w-6 h-20">
        <motion.div
          variants={chevronVariants}
          initial="initial"
          animate="animate"
          className="absolute top-0 left-0 w-full"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
        <motion.div
          variants={chevronVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.15 }}
          className="absolute top-4 left-0 w-full"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
        <motion.div
          variants={chevronVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
          className="absolute top-8 left-0 w-full"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </div>
      <p className="text-sm font-thin font-mono uppercase">{text}</p>
    </Link>
  );
};

export default ScrollButton;
