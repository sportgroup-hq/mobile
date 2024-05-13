import { useLocalSearchParams } from "expo-router";

import PersonRecordCheckbox from "./PersonRecordCheckbox";
import PersonRecordRating from "./PersonRecordRating";

import useRecordPermissions from "~/hooks/useRecordPermissions";
import { PersonRecord, RecordType } from "~/types/records";

interface PersonRecordWrapperProps {
  record: PersonRecord;
}

export default function PersonRecordWrapper(props: PersonRecordWrapperProps) {
  const { record } = props;

  const { groupId } = useLocalSearchParams<{
    groupId: string;
  }>();
  const { canView } = useRecordPermissions(record.permissions, groupId!);

  if (!canView) {
    return null;
  }

  if (record.type === RecordType.Checkbox) {
    return <PersonRecordCheckbox record={record} />;
  }
  if (record.type === RecordType.Rating) {
    return <PersonRecordRating record={record} />;
  }

  return null;
}
