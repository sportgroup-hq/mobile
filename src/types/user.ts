export interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: 0;
  refresh_token: string;
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
