// File: layouts/Experience/Page.tsx

import React from "react";

const work = [
  {
    company: "Surya Fajar Urun Dana",
    href: "https://sfund.id",
    badges: [],
    location: "Onsite Jakarta",
    title: "Front End Developer",
    start: "February 2023",
    end: "present",
    description:
      "I develop and maintain web applications using Next.js, React, HTML5, CSS3, and JavaScript. My work includes creating reusable UI components, collaborating with design and backend teams, and implementing best practices for writing high-quality code. Additionally, I integrate third-party services and deploy Next.js applications to Ubuntu servers for production use.",
  },
  {
    company: "Lokcay Studio",
    badges: [],
    href: "https://Lokcay.com",
    location: "Onsite Jakarta",
    title: "IT Support",
    start: "June 2017",
    end: "January 2023",
    description:
      "I provided first-line support for software, hardware, and network issues. I also configured Windows Server, maintained network infrastructure, managed NAS, and developed company profile websites.",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-8">
          {work.map((job, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-lg text-gray-600">
                <a
                  href={job.href}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  {job.company}
                </a>{" "}
                – {job.location}
              </p>
              <span className="text-sm text-gray-500">
                {job.start} - {job.end}
              </span>
              <p className="mt-3 text-gray-700">{job.description}</p>
              {/* Badges (if any) */}
              {job.badges && job.badges.length > 0 && (
                <div className="mt-2 space-x-2">
                  {job.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
