import { ROLE_MAP } from "~/constants/records";
import { RecordPermissions, Role } from "~/types/records";

export function checkPermissions(permissions: RecordPermissions, role: Role) {
  return {
    canView: permissions.view.includes(role),
    canEdit: permissions.edit.includes(role),
  };
}

export function getPermissionLabel(roles: Role[]) {
  const hasCoach = roles.includes(Role.Coach);
  const hasAthelete = roles.includes(Role.Athelete);

  if (hasCoach && hasAthelete) {
    return "Всі";
  }

  if (hasCoach) {
    return ROLE_MAP[Role.Coach];
  }

  return ROLE_MAP[Role.Athelete];
}
