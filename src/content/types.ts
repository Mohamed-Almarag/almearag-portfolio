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

export type Product = {
  name: string;
  stack: string[];
  links: { demo: string; docs: string };
  highlights: string[];
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
