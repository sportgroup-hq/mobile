import { User } from "~/types/users";

export function getFullName(user: User) {
  return `${user.firstName} ${user.lastName}`;
}
