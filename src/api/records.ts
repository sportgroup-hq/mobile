import { Record } from "~/types/records";
import mockedApiClient from "./mockedApiClient";
import { generatePath } from "~/helpers/misc";
import { RECORDS_KEY, RECORDS_URL } from "~/constants/records";
import { useQuery } from "react-query";

async function getRecords(groupId: string): Promise<Record[]> {
  const res = await mockedApiClient.get(
    generatePath(RECORDS_URL, { id: groupId })
  );
  return res.data;
}

export function useGetRecords(groupId: string) {
  return useQuery({
    queryKey: [RECORDS_KEY, groupId],
    queryFn: () => getRecords(groupId),
  });
}
