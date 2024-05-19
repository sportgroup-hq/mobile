import { User } from "~/types/user";

export function getFullName(user: User) {
  return `${user.firstName} ${user.lastName}`;
}
