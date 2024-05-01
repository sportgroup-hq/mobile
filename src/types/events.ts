import { User } from "./users";

export interface BaseEvent {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  location?: string;
  description?: string;
  createdAt: string;
  editedAt: string;
}
export interface GroupEvent extends BaseEvent {
  participants: User[];
}

export interface PersonEvent extends BaseEvent {
  participant: User;
  records: any;
}
