import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aly Abou-Zaid",
  initials: "AA",
  url: "https://alyabouzaid.com",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "I design and build digital products. Always curious, always creating.",
  summary:
    "I graduated in 2025 with a degree in Computer Science and a minor in Mass Communications. I love working at the intersection of design and development. I’ve co-founded platforms, built apps, and created websites for different projects and clients. What drives me is turning ideas into products that people actually want to use.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Wireframing",
    "Prototyping",
    "Interaction Design",
    "Information Architecture",
    "Accessibility",
    "Figma",
    "HTML",
    "CSS",
    "JavaScript",
    "SvelteKit",
    "Tailwind CSS",
    "Firebase",
    "Git",
    "Illustrator",
    "Photoshop",
    "Premiere Pro",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "aly@example.com",
    tel: "+1234567890",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/alyab0uzaid",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alyabouzaid/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@AlyAbouZaid",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [],
  education: [],
  projects: [
    {
      title: "RabbitHole Chrome Extension",
      href: "https://github.com/alyab0uzaid/RabbitHole",
      dates: "March 2025",
      active: true,
      slug: "rabbithole",
      description:
        "A Chrome extension that integrates Wikipedia content and visualizes your exploration journey across webpages.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "GoJS",
        "Chrome Extension API",
        "Wikipedia API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/alyab0uzaid/RabbitHole",
          icon: "github",
        },
      ],
      image: "/images/rabbitholecover.png",
      video: "",
    },
    {
      title: "PrepGuide.org",
      href: "https://www.prepguide.org/",
      dates: "May 2024",
      active: true,
      slug: "prepguide",
      description:
        "PrepGuide is an online platform I co-founded with my brother to provide free resources for SAT preparation.",
      technologies: [
        "Webflow",
        "CMS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.prepguide.org/",
          icon: "globe",
        },
      ],
      image: "",
      video: "/PrepGuideDemov2.mov",
    },
    {
      title: "Personal Spotify Terminal Interface",
      href: "https://github.com/alyab0uzaid/termify",
      dates: "June 2024",
      active: true,
      slug: "termify",
      description:
        "Termify provides a unique tactile experience for Spotify users, where they can retrieve top tracks, save playlists, and log out from the terminal interface.",
      technologies: [
        "Node.js",
        "Express",
        "Spotify API",
        "Pug",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/alyab0uzaid/termify",
          icon: "github",
        },
      ],
      image: "",
      video: "/termifydemov6.mp4",
    },
    {
      title: "Endangered Species Visualization",
      href: "https://stlzoovisualization.pages.dev",
      dates: "April 2024",
      active: true,
      slug: "zoo",
      description:
        "An interactive website that maps endangered species at the Saint Louis Zoo.",
      technologies: [
        "HTML",
        "CSS",
        "Leaflet.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://stlzoovisualization.pages.dev",
          icon: "globe",
        },
      ],
      image: "/images/zooss.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
