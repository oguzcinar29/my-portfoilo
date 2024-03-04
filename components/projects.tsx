"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects </SectionHeading>
      <p className="text-center pb-3">
        ( Using free database have to wait little bit to fetch data.Thank you)
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <a href={project.live}>
              <Project {...project} />
            </a>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
