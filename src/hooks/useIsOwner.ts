import { useGetGroup } from "~/api/groups";
import { useGetMe } from "~/api/users";

export default function useIsOwner(id: string) {
  const { data: groupData } = useGetGroup(id);
  const { data: userData } = useGetMe();

  const isOwner = userData?.id === groupData?.owner?.id;

  return isOwner;
}
