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
  tagline: "Final-year B.Tech CSE student who builds AI-powered web applications \u2014 from research assistants to finance dashboards to creative tools.",
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
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: DiCss3 },
      { name: "DOM Manipulation", icon: SiJavascript },
      { name: "Responsive Web Design", icon: SiHtml5 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL", icon: SiMysql },
      { name: "RDBMS", icon: DiDatabase },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "OOP", icon: MdOutlineDataObject },
      { name: "Data Structures", icon: MdOutlineDataObject },
      { name: "REST APIs", icon: TbApi },
      { name: "API Integration", icon: TbApi },
      { name: "Problem Solving", icon: MdOutlineDataObject },
    ],
  },
  {
    title: "Tools & Systems",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Basic Linux", icon: SiLinux },
      { name: "MS Excel", icon: SiStreamlit },
      { name: "MS Word", icon: SiStreamlit },
    ],
  },
  {
    title: "Additional",
    skills: [
      { name: "PGDCA", icon: FaGraduationCap },
      { name: "Basic Tally", icon: FaGraduationCap },
    ],
  },
]

export const projects = [
  {
    title: "ResearchMind AI",
    description: "An AI-powered research assistant that lets users upload PDF documents and interact with them through an intelligent chatbot. Integrates AI APIs for conversational Q&A grounded in uploaded documents, with an interface for document upload, chat history, and AI-powered document understanding.",
    tech: ["Python", "Streamlit", "AI APIs"],
    liveUrl: "https://researchmind-ai-mnyurglvj9ny7fjvzxrvqz.streamlit.app/",
    githubUrl: "https://github.com/adityanarayan679",
  },
  {
    title: "Smart Finance",
    description: "A personal finance management app with AI-powered financial insights \u2014 an integrated AI chatbot for finance questions, plus dashboards for expense tracking, budgeting, and spending analysis.",
    tech: ["HTML", "CSS", "JavaScript", "AI APIs"],
    liveUrl: "https://adityanarayan679.github.io/Smart-Finance/",
    githubUrl: "https://github.com/adityanarayan679",
  },
  {
    title: "AI Powered Whiteboard",
    description: "An AI-assisted whiteboard that generates diagrams, flowcharts, and mind maps, providing an interactive workspace for visual brainstorming.",
    tech: ["HTML", "CSS", "JavaScript", "AI APIs"],
    liveUrl: "https://adityanarayan679.github.io/AI-Powered-Whiteboard/",
    githubUrl: "https://github.com/adityanarayan679",
  },
  {
    title: "Anime Binge Tracker",
    description: "A responsive web app for tracking watched anime and progress, with search, categorization, and progress management features.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://adityanarayan679.github.io/anime-binge-tracker/",
    githubUrl: "https://github.com/adityanarayan679",
  },
]

export const certifications = [
  "AI For Everyone \u2014 DeepLearning.AI",
  "Graphic Design \u2014 Adobe",
  "Cloud Computing Foundations \u2014 Duke University",
  "Introduction to Cybersecurity Essentials \u2014 IBM",
  "Internet of Things: Communication Technologies \u2014 UC San Diego",
  "Introduction to Google Workspace with Gemini \u2014 Google Cloud",
  "Gemini in Gmail \u2014 Google Cloud",
  "Introduction to Microsoft Excel \u2014 Coursera",
  "Getting Started with Microsoft Excel \u2014 Coursera",
  "Getting Started with Microsoft PowerPoint \u2014 Coursera",
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