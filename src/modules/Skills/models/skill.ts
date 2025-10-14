export type Level = 'Beginner' | 'Intermediate' | 'Proficient' | 'Advanced';
export interface Skill {
  name: string;
  proficiency: number;
  level: Level;
}