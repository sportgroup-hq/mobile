import { useGetGroup } from "~/api/groups";
import { useGetUser } from "~/api/user";

export default function useIsOwner(id: string) {
  const { data: groupData } = useGetGroup(id);
  const { data: userData } = useGetUser();

  const isOwner = userData?.id === groupData?.owner?.id;

  return isOwner;
}
