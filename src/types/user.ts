export interface RegisterData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

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
