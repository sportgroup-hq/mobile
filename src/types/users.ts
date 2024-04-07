export enum Sex {
  Male = "MALE",
  Female = "FEMALE",
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  phone?: string;
  dateOfBirth?: string;
  sex?: Sex;
  address?: string;
}
