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
        I'm Oğuz, an electrical engineering student turned passionate
        programmer. Starting with C and C++, I found my calling in web
        development during university. I left formal education to focus on web
        development, diving into self-learning through Udemy courses and
        certifications. Building a robust portfolio, I honed my skills in
        creating dynamic and visually appealing websites.
      </p>
    </motion.section>
  );
}
