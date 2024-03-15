import { IUser } from "./users";

export interface IGroup {
  id: string;
  name: string;
  sport?: string;
  code: string;
  owner: IUser;
  createdAt: string;
  editedAt: string;
}
