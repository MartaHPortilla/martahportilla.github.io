import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Marta Hoyo Portilla",
  EMAIL: "martahportilla@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Marta | Software Developer Portfolio",
  DESCRIPTION: "Portfolio of Marta, software developer. Projects, experience and articles about programming and software development.",
};

export const BLOG: Metadata = {
  TITLE: "Blog | Marta · Software Developer",
  DESCRIPTION: "Technical articles and personal posts about software development, programming, tools and learning experiences.",
};

export const WORK: Metadata = {
  TITLE: "Experience | Marta · Software Developer",
  DESCRIPTION: "Professional experience, roles and companies where I have worked.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects | Marta · Software Developer",
  DESCRIPTION: "Selected software development projects with descriptions, technologies used and links to repositories.",
};


export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/martahportilla"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/martahportilla",
  }
];
