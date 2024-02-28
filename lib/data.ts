import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import blogWebImg from "@/public/project1-img.png";
import frontCommerceImg from "@/public/project2-img.png";
import fullStackCommerceImg from "@/public/projec132.png";
import socialMediaImg from "@/public/22.png";
import nextTodo from "@/public/12.png";
import niceEcommerce from "@/public/1231.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E-Commerce Website",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "CSS", "HTML", "Javascrip3t"],
    imageUrl: niceEcommerce,
    live: "https://frontend-e-commerce-two-nu.vercel.app/",
  },
  {
    title: "Social Media App",
    description:
      "Thats my mona lisa.I've spent for so many times for this project.That was fun to make it",
    tags: ["React", "Postgresql", "CSS", "HTML", "Node.js", "Exprees"],
    imageUrl: socialMediaImg,
    live: "https://social-media-eta-amber.vercel.app/login",
  },
  {
    title: "Blog Website",
    description:
      "This is the first project that i made as a full stack developer.It needs bunch of upgrades.In this website you can share post delete edit whatever you want.",
    tags: ["React", "Postgresql", "CSS", "HTML", "Node.js", "Exprees"],
    imageUrl: blogWebImg,
    live: "https://blog-website-inky-tau.vercel.app",
  },
  {
    title: "Front-end E-Commerce",
    description: "That's made with just front-end basic e-commerce website.",
    tags: ["React", "Javascript", "HTML", "CSS"],
    imageUrl: frontCommerceImg,
    live: "https://front-end-e-commerce-nine.vercel.app",
  },
  {
    title: "Full-Stack E-Commerce",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Postgresql", "CSS", "HTML", "Node.js", "Exprees"],
    imageUrl: fullStackCommerceImg,
    live: "https://full-stack-e-commerce-eight.vercel.app/",
  },
  {
    title: "Nextjs Blog Website",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Postgresql", "CSS", "HTML", "Node.js", "Exprees"],
    imageUrl: nextTodo,
    live: "https://nextjs-todo-omega.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "C++",
  "C",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
] as const;
