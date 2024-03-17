"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm Oğuz, a former student of electrical engineering who discovered a
        passion for programming while studying. My journey began with learning C
        and C++ during my time in university, where I found immense joy in
        software development. Subsequently, I made the bold decision to
        transition into the web development sphere, which led me to depart from
        my university education. In pursuit of becoming a proficient web
        developer, I devoted myself to self-directed learning and skill
        enhancement. Through various Udemy courses and acquiring certifications,
        I deepened my understanding of web technologies. I supplemented
        theoretical knowledge with practical application, constructing a diverse
        portfolio of projects that showcased my capabilities. By combining
        theoretical insights with hands-on experience, I solidified my expertise
        in web development. I am now adept at creating dynamic and visually
        appealing websites, driven by a blend of creativity and technical
        proficiency. I am eager to leverage my skills and passion for web
        development to contribute effectively to your team and contribute to
        meaningful projects.
      </p>
    </motion.section>
  );
}
