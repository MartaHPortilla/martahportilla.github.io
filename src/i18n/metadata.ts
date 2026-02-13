import type { Metadata } from "@types";

export function getHomeMetadata(lang: "es" | "en"): Metadata {
  return lang === "es" 
  ? {
        TITLE: "Marta | Portfolio de Desarrolladora de Software",
        DESCRIPTION: "Portfolio de Marta, desarrolladora de software. Proyectos, experiencia y artículos sobre programación y desarrollo de software.",
    }
    : {
        TITLE: "Marta | Software Developer Portfolio",
        DESCRIPTION: "Portfolio of Marta, software developer. Projects, experience and articles about programming and software development.",
    };
}

export function getBlogMetadata(lang: "es" | "en"): Metadata {
    return lang === "es"
    ? {
        TITLE: "Blog | Marta · Desarrolladora de Software",
        DESCRIPTION: "Artículos técnicos y personales sobre desarrollo de software, programación, herramientas y experiencias de aprendizaje.",
    }
    : {
        TITLE: "Blog | Marta · Software Developer",
        DESCRIPTION: "Technical articles and personal posts about software development, programming, tools and learning experiences.",
    };
}

export function getWorkMetadata(lang: "es" | "en"): Metadata {
    return lang === "es"
    ? {
        TITLE: "Trabajos | Marta · Desarrolladora de Software",
        DESCRIPTION: `Experiencia profesional, roles y empresas donde he trabajado.`,
    }
    : {
        TITLE: "Work | Marta · Software Developer",
        DESCRIPTION: "Professional experience, roles and companies where I have worked.",
    };
}

export function getProjectsMetadata(lang: "es" | "en"): Metadata {
    return lang === "es"
    ? {
        TITLE: "Proyectos | Marta · Desarrolladora de Software",
        DESCRIPTION: `Descripción de los proyectos desarrollados.`,
    }
    : {
        TITLE: "Projects | Marta · Software Developer",
        DESCRIPTION: "Description of the developed projects.",
    };
}