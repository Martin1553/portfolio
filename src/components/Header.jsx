import React from "react";
import { FloatingDock } from "./aceternityui/components/FloatingDock";
import {
  IconHome,
  IconUser,
  IconTargetArrow,
  IconRocket,
  IconMail,
  IconCloudDownload,
  IconBrandGithub,
  IconBrandLinkedin
} from "@tabler/icons-react";

export default function Header() {
  const links = [
    {
      title: "Inicio",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#inicio",
    },
    {
      isSeparator: true, // lo usaremos para detectar que esto no es un ítem "normal"
    },
    {
      title: "Sobre mí",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#sobre-mi",
    },
    {
      title: "Habilidades",
      icon: (
        <IconTargetArrow className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#habilidades",
    },
    {
      title: "Proyectos",
      icon: (
        <IconRocket className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#proyectos",
    },
    {
      title: "Contacto",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contacto",
    },
    {
      title: "Descargar CV",
      icon: (
        <IconCloudDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/cv/Martin-Di-Paola-Full-Stack-Web-Developer.pdf", // o "/assets/cv.pdf" si lo pusiste en /public/assets
      download: true,
    },
    {
      isSeparator: true, // lo usaremos para detectar que esto no es un ítem "normal"
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/Martin1553",
      target: "_blank" // ← esto es lo nuevo
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/martin-di-paola",
      target: "_blank" // ← esto es lo nuevo
    },
  ];

  return (
    <header className="fixed top-24 md:top-16 left-0 w-full z-50 flex items-center justify-center bg-transparent">
      <FloatingDock
        mobileClassName="translate-y-4" // un poquito de separación abajo en mobile
        items={links}
      />
    </header>
  );
}
