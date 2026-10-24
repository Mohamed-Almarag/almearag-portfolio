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
  highlights: Highlight[];
};

// Text shown in bold, matching the bold phrases in the CV
export type Bold = { bold: string | Link };

export type Highlight = string | (string | Link | Bold)[];

export type Product = {
  name: string;
  stack: string[];
  links: Link[];
  highlights: Highlight[];
};

export type Contribution = {
  repo: string;
  stars: string;
  summary: Highlight;
  prs: Link[];
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
