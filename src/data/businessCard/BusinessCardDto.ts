export interface BusinessCardDto {
  name: string;
  myDescription: string;
  contacts: { name: string; ref: string }[];
  skills: BcSkill[];
  projects: BcProject[];
}

export interface BcSkill {
  name: string;
  comment?: string;
  frameworks?: { name: string; comment?: string }[];
}

export interface BcProject {
  name: string;
  description: string;
  hrefs: { name: string; ref: string }[];
  technologies: string[];
}
