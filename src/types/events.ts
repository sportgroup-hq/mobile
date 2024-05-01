import { User } from "./users";

export interface Event {
  id: string;
  name: string;
  participants: User[];
  startDate: string;
  endDate: string;
  location?: string;
  description?: string;
  createdAt: string;
  editedAt: string;
}

export interface PersonEvent extends Omit<Event, "participants"> {
  records: any;
}
