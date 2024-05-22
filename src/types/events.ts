import { PersonRecord } from "./records";
import { User } from "./user";

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
  records: PersonRecord[];
}
