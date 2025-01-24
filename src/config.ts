import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://notes-theta-gules.vercel.app/", // replace this with your deployed domain
  author: "DTeam",
  profile: "https://blog.dteam.top/",
  desc: "A small notes collection powered by TSW and Astro.",
  title: "TSW Notes",
  ogImage: "favicon.ico",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
};

export const LOCALE = {
  lang: "zh", // html lang code. Set this empty and default will be "en"
  langTag: ["zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/DTeam-Top/tsw-notes-template",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
