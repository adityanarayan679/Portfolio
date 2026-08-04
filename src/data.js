import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiMysql,
  SiGit,
  SiGithub,
  SiLinux,
  SiStreamlit,
} from "react-icons/si"
import { DiCss3, DiDatabase } from "react-icons/di"
import { TbApi } from "react-icons/tb"
import { MdOutlineDataObject } from "react-icons/md"
import { FaGraduationCap } from "react-icons/fa"

export const personalInfo = {
  name: "Aditya Narayan Barik",
  title: "Software Developer | AI Application Developer",
  location: "Cuttack, Odisha, India",
  email: "adityanarayanbarik5277@gmail.com",
  phone: "+91 9337531032",
  github: "https://github.com/adityanarayan679",
  tagline: "Final-year B.Tech CSE student who builds AI-powered web applications — from research assistants to finance dashboards to creative tools.",
  summary: "Final-year B.Tech Computer Science Engineering student passionate about software development and AI-powered applications. Skilled in C, C++, Python, JavaScript, SQL, HTML5, CSS3, Git, GitHub, and basic Linux. Experienced in designing and deploying AI-powered web applications using modern APIs and responsive front-end technologies. Strong problem-solving, analytical thinking, and software development fundamentals. Seeking an entry-level Software Developer or AI Engineer role.",
  resumeUrl: "/resume/resume.pdf",
}

export const education = [
  { degree: "B.Tech in Computer Science Engineering (Final Year)", institution: "Nigam Institute of Engineering and Technology" },
  { degree: "12th Grade (HSC)", institution: "Maa Saraswati Shishu Vidya Mandir, Cuttack" },
]

export const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "C", icon: SiC, level: 80 },
      { name: "C++", icon: SiCplusplus, level: 80 },
      { name: "Python", icon: SiPython, level: 75 },
      { name: "JavaScript", icon: SiJavascript, level: 65 },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML5", icon: SiHtml5, level: 85 },
      { name: "CSS3", icon: DiCss3, level: 80 },
      { name: "DOM Manipulation", icon: SiJavascript, level: 65 },
      { name: "Responsive Web Design", icon: SiHtml5, level: 75 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL", icon: SiMysql, level: 60 },
      { name: "RDBMS", icon: DiDatabase, level: 60 },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "OOP", icon: MdOutlineDataObject, level: 75 },
      { name: "Data Structures", icon: MdOutlineDataObject, level: 70 },
      { name: "REST APIs", icon: TbApi, level: 60 },
      { name: "API Integration", icon: TbApi, level: 65 },
      { name: "Problem Solving", icon: MdOutlineDataObject, level: 80 },
    ],
  },
  {
    title: "Tools & Systems",
    skills: [
      { name: "Git", icon: SiGit, level: 60 },
      { name: "GitHub", icon: SiGithub, level: 65 },
      { name: "Basic Linux", icon: SiLinux, level: 40 },
      { name: "MS Excel", icon: SiStreamlit, level: 55 },
      { name: "MS Word", icon: SiStreamlit, level: 55 },
    ],
  },
  {
    title: "Additional",
    skills: [
      { name: "PGDCA", icon: FaGraduationCap, level: 70 },
      { name: "Basic Tally", icon: FaGraduationCap, level: 40 },
    ],
  },
]

export const projects = [
  {
    title: "ResearchMind AI",
    description: "An AI-powered research assistant that lets users upload PDF documents and interact with them through an intelligent chatbot. Built on a Retrieval-Augmented Generation (RAG) pipeline — documents are indexed, chunked, and embedded, then relevant chunks are retrieved and passed to the LLM for grounded, citation-ready answers. Includes an interface for document upload, chat history, and AI-powered document understanding.",
    tech: ["Python", "Streamlit", "AI APIs", "RAG Pipelines"],
    liveUrl: "https://researchmind-ai-mnyurglvj9ny7fjvzxrvqz.streamlit.app/",
    githubUrl: "https://github.com/adityanarayan679/Researchmind-Ai",
  },
  {
    title: "Smart Finance",
    description: "A personal finance management app with AI-powered financial insights — an integrated AI chatbot for finance questions, plus dashboards for expense tracking, budgeting, and spending analysis.",
    tech: ["HTML", "CSS", "JavaScript", "AI APIs"],
    liveUrl: "https://adityanarayan679.github.io/Smart-Finance/",
    githubUrl: "https://github.com/adityanarayan679/Smart-Finance",
    featured: true,
  },
  {
    title: "AI Powered Whiteboard",
    description: "An AI-assisted whiteboard that generates diagrams, flowcharts, and mind maps, providing an interactive workspace for visual brainstorming.",
    tech: ["HTML", "CSS", "JavaScript", "AI APIs"],
    liveUrl: "https://adityanarayan679.github.io/AI-Powered-Whiteboard/",
    githubUrl: "https://github.com/adityanarayan679/AI-Powered-Whiteboard",
  },
  {
    title: "Anime Binge Tracker",
    description: "A responsive web app for tracking watched anime and progress, with search, categorization, and progress management features.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://adityanarayan679.github.io/anime-binge-tracker/",
    githubUrl: "https://github.com/adityanarayan679/anime-binge-tracker",
  },
]

export const certifications = [
  "AI For Everyone — DeepLearning.AI",
  "Graphic Design — Adobe",
  "Cloud Computing Foundations — Duke University",
  "Introduction to Cybersecurity Essentials — IBM",
  "Internet of Things: Communication Technologies — UC San Diego",
  "Introduction to Google Workspace with Gemini — Google Cloud",
  "Gemini in Gmail — Google Cloud",
  "Introduction to Microsoft Excel — Coursera",
  "Getting Started with Microsoft Excel — Coursera",
  "Getting Started with Microsoft PowerPoint — Coursera",
]

export const experience = [
  {
    role: "Hospital Coordination Assistant",
    organization: "SCB Medical Hospital, Cuttack",
    period: "2022",
    details: "Assisted with day-to-day hospital coordination and operational activities; developed communication, teamwork, and organizational skills in a professional healthcare environment.",
  },
]

export const languages = [
  { name: "Odia", level: "Native" },
  { name: "Hindi", level: "Fluent" },
  { name: "English", level: "Intermediate" },
]

export const navLinks = ["Home", "About", "Skills", "Projects", "Certifications", "Experience"]