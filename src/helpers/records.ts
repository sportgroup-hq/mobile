import { RecordPermissions, Role } from "~/types/records";

export function checkPermissions(permissions: RecordPermissions, role: Role) {
  return {
    canView: permissions.view.includes(role),
    canEdit: permissions.edit.includes(role),
  };
}
