"use client";

import { Products } from "@/components/projects/product";

const Project = () => {
  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>
        <Products />
      </div>
    </section>
  );
};

export default Project;
