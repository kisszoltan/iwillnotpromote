export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "I will not promote",
  shortName: "iwnp",
  description: "The startup newsletter born from Reddit's most ironic rule.",
  company: "Kiss-Hanzsa Ltd.",
  keywords: ["startup", "i will not promote"],
  navItems: [
    {
      label: "Landing",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Landing",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    email: "contact@iwillnotpromote.com",
    web: "iwillnotpromote.com",
    github: "https://github.com/kisszoltan/iwillnotpromote",
    twitter: "https://twitter.com/hun_iscream",
    donate: "https://facebook.com/kiss.csillag.alapitvany",
  },
};
