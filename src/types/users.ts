export enum Sex {
  Male,
  Female,
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  phone?: string;
  dateOfBirth?: Date;
  sex?: Sex;
  address?: string;
}
