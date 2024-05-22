import { User } from "./user";

export interface Group {
  id: string;
  name: string;
  sport?: string;
  code?: string;
  owner: User;
  createdAt: string;
  editedAt: string;
}

export interface SelectedGroups {
  createdGroups: Group[];
  joinedGroups: Group[];
}
