import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import blogWebImg from "@/public//33.png";
import frontCommerceImg from "@/public/project2-img.png";
import fullStackCommerceImg from "@/public/ee.png";
import socialMediaImg from "@/public/22.png";
import nextTodo from "@/public/12.png";
import niceEcommerce from "@/public/1231.png";
import rentcar from "@/public/3333333.png";
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

export const experiencesData = [] as const;

export const projectsData = [
  {
    title: "Full-Stack E-Commerce Next.js",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "MongoDB", "Nextjs", "Tailwind", "Typescript"],
    imageUrl: fullStackCommerceImg,
    live: "https://nextjs-e-commerce-rosy.vercel.app",
    github: "https://github.com/oguzcinar29/full-stack-e-commerce",
  },
  {
    title: "E-Commerce Website",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "CSS", "HTML", "Javascript"],
    imageUrl: niceEcommerce,
    live: "https://frontend-e-commerce-two-nu.vercel.app/",
    github: "https://github.com/oguzcinar29/frontend-e-commerce-two",
  },
  {
    title: "Rent Car Website",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "CSS", "HTML", "Javascript"],
    imageUrl: rentcar,
    live: "https://rent-car-react.vercel.app/",
    github: "https://github.com/oguzcinar29/frontend-e-commerce-two",
  },

  {
    title: "Nextjs Blog Website",
    description:
      "This is the blog website.You can share your post, delete, edit,be able to add image.",
    tags: ["React", "MongoDB", "Nextjs", "Tailwind", "Typescript"],
    imageUrl: blogWebImg,
    live: "https://nextjs-blog-website-chi.vercel.app",
    github: "https://github.com/oguzcinar29/nextjs-blog-website",
  },
  {
    title: "Front-end E-Commerce",
    description: "That's made with just front-end basic e-commerce website.",
    tags: ["React", "Javascript", "HTML", "CSS"],
    imageUrl: frontCommerceImg,
    live: "https://front-end-e-commerce-nine.vercel.app",
    github: "https://github.com/oguzcinar29/front-end-e-commerce",
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
