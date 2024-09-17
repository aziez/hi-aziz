"use client";
import { DATA } from "@/data/resume";
import React from "react";

const InfoCard = () => {
  return (
    <div className="text-md md:text-start">
      <div className="whitespace-pre-wrap leading-relaxed">
        {DATA.professionalSummary.split("\n\n").map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph.startsWith("•") ? (
              <ul className="list-disc list-inside list-item mb-4">
                {paragraph.split("\n").map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-1">
                    {item.trim().substring(1)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mb-4">{paragraph}</p>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
