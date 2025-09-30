import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  weatherpedia,
  tosql,
  ecommerce,
  Antin,
  java,
  python,
  language,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [];

export const technologies = [
  {name: 'python', icon: python},
  { name: "Java", icon: java },
  { name: "React JS", icon: reactjs },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Investment Intern",
    company_name: "Antin Infrastructure Partners",
    icon: Antin,
    iconBg: "#161329",
    date: "Jun 2024 - Jul 2024",
    points: [
    "Managed and coordinated client requests weekly, ensuring timely resolution and maintaining a 95% satisfaction rate through efficient communication and problem-solving.",
    "Analyzed daily currency market trends and reports, identifying profitable trading opportunities that contributed to an increase in revenue"
    ],
  },
];

export const projects = [
  {
    name: "Limbu Language Learning Website",
    description:
      "Lesson based language learning website that teach Limbu, an Indigenous language based in Nepal",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Html", color: "pink-text-gradient" },
      { name: "Css", color: "pink-text-gradient" },
      { name: "Js", color: "pink-text-gradient" },
    ],
    image: language,
    source_code_link: "https://github.com/MukkuChemjong/Language-app",
  },
  {
    name: "Ecommerce Website",
    description:
      "Web-based platform that allows users to browse and add products to their cart then checked out which gives a detailed summary of the total",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Paypal Api", color: "pink-text-gradient" },
      { name: "Cloudinary Api", color: "pink-text-gradient" },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/MukkuChemjong/e-commerce",
  },
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/MukkuChemjong/Weather",
  },
  {
    name: "Natural Langague to SQL",
    description:
      "Program that allows you to input pseudo programming langauge and converts it to valid SQL",
    tags: [
      { name: "llama", color: "blue-text-gradient" },
      { name: "Typescript", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
    ],
    image: tosql,
    source_code_link: "https://github.com/MukkuChemjong/languageToSQL",
  },
];
