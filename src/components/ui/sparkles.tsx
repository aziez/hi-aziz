"use client";
import React from "react";

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: any) => {
  return <div id={id} className={className} style={{ background }} />;
};
