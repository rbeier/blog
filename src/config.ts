import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://rbeier.dev/",
  author: "rbeier",
  desc: "just another dev blog.",
  title: "rbeier.dev",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerPage: 10,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/rbeier",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jumpshoxx/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:hello@rbeier.dev",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "500px",
    href: "https://500px.com/p/JumpShoXX",
    linkTitle: `${SITE.title} on 500px`,
    active: true,
  },
];
