import { User } from "./users";

export interface Group {
  id: string;
  name: string;
  sport?: string;
  code: string;
  owner: User;
  createdAt: string;
  editedAt: string;
}
