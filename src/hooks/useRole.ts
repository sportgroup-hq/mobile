import { useGetGroup } from "~/api/groups";
import { useGetUser } from "~/api/users";
import { Role } from "~/types/records";

export default function useRole(id: string) {
  const { data: groupData } = useGetGroup(id);
  const { data: userData } = useGetUser();

  if (userData?.id === groupData?.owner?.id) {
    return Role.Coach;
  }

  return Role.Athelete;
}
