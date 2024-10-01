"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { DATA } from "@/data/resume";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ChevronRight, ExternalLink } from "lucide-react";

export const Products: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DATA.projects.map((product, idx) => (
          <motion.div
            key={product.href}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            onHoverStart={() => setHoveredIndex(idx)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.title} thumbnail`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                <p className="text-sm text-gray-600 mb-4 ">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.technologies?.map((technology) => (
                    <Badge
                      key={technology}
                      variant="secondary"
                      className="text-xs"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full group" variant="outline">
                  <Link href={product.href} target="_blank">
                    View Project
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
