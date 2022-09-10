export default interface BusinessCardDto {
  skills: BcSkill[];
}

export interface BcSkill {
  name: string;
  comment?: string;
  frameworks?: { name: string; comment?: string }[];
}
