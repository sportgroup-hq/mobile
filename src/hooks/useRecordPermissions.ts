import useRole from "./useRole";

import { checkPermissions } from "~/helpers/records";
import { RecordPermissions } from "~/types/records";

export default function useRecordPermissions(
  permissions: RecordPermissions,
  groupId: string
) {
  const role = useRole(groupId);
  return checkPermissions(permissions, role);
}
