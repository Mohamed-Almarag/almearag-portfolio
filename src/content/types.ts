export type Link = {
  label: string;
  href: string;
};

export type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  products?: string[];
  highlights: string[];
};

export type Highlight = string | (string | Link)[];

export type Product = {
  name: string;
  stack: string[];
  // Company projects: the CV shows only this framework, the site the full stack
  mainStack?: string;
  links: Link[];
  highlights: Highlight[];
};

export type Contribution = {
  repo: string;
  stars: string;
  summary: Highlight;
  prs: Link[];
  credit?: Highlight;
  report?: {
    text: string;
    links: Link[];
  };
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Education = {
  degree: string;
  school: string;
  year: string;
  grade: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Section = {
  id: string;
  title: string;
  inNav: boolean;
};
