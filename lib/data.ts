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
import pizzaOrder from "@/public/444.png";
import rentcar from "@/public/3333333.png";
import event from "@/public/43.png";
import snap from "@/public/snap.png";
import eyewear from "@/public/eyewear-img.png";
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [] as const;

export const projectsData = [
  {
    title: "Evently Full-Stack Events App",
    description: "This is full stack project where you can buy event ticket.",
    tags: ["React", "MongoDB", "Nextjs", "Tailwind", "Typescript"],
    imageUrl: event,
    live: "https://event-platform-nextjs.vercel.app/",
    github: "https://github.com/oguzcinar29/event-platform-nextjs",
  },
  {
    title: "Eyewear Full-Stack  App",
    description: "Its full stack eyewear store app where you can buy glasses.",
    tags: ["React", "MongoDB", "Node.js", "Express", "Tailwind", "Typescript"],
    imageUrl: eyewear,
    live: "https://eyewear-store-app.onrender.com/",
    github: "https://github.com/oguzcinar29/eyewear-store-app",
  },
  {
    title: "Full-Stack E-Commerce Next.js",
    description: "This is full stack e commerce website.",
    tags: ["React", "MongoDB", "Nextjs", "Tailwind", "Typescript"],
    imageUrl: fullStackCommerceImg,
    live: "https://nextjs-e-commerce-rosy.vercel.app",
    github: "https://github.com/oguzcinar29/nextjs-e-commerce",
  },
  {
    title: "E-Commerce Website",
    description: "Front End e commerce website.There is no database",
    tags: ["React", "CSS", "HTML", "Javascript"],
    imageUrl: niceEcommerce,
    live: "https://frontend-e-commerce-two-nu.vercel.app/",
    github: "https://github.com/oguzcinar29/frontend-e-commerce-two",
  },
  {
    title: "Snapgram Social Media",
    description: "Full stack project made with nextjs.",
    tags: ["React", "MongoDB", "Nextjs", "Tailwind", "Typescript"],
    imageUrl: snap,
    live: "https://snapgram-phi-swart.vercel.app/",
    github: "https://github.com/oguzcinar29/snapgram",
  },

  {
    title: "Rent Car Website",
    description:
      "Front End rent car website.That was the project that i made in the begining of my journey.",
    tags: ["React", "CSS", "HTML", "Javascript"],
    imageUrl: rentcar,
    live: "https://rent-car-react.vercel.app/",
    github: "https://github.com/oguzcinar29/rent-car-react",
  },
  {
    title: "Pizza Order Nextjs",
    description: "Thats full stack project made with nextjs.",
    tags: ["React", "MongoDB", "Nextjs", "Tailwind", "Javascript"],
    imageUrl: pizzaOrder,
    live: "https://pizza-e-commerce-nine.vercel.app",
    github: "https://github.com/oguzcinar29/pizza-e-commerce",
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
