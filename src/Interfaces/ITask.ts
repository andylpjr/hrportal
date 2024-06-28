import { IMember } from "./IMember";

export interface ITask {
  id: string;
  description: string;
  due: string;
  member: IMember[];
  progress: number;
}
