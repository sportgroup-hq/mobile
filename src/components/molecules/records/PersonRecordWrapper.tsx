import { useLocalSearchParams } from "expo-router";

import PersonRecordText from "./PersonRecordText";
import PersonRecordNumber from "./PersonRecordNumber";
import PersonRecordCheckbox from "./PersonRecordCheckbox";
import PersonRecordRating from "./PersonRecordRating";

import useRecordPermissions from "~/hooks/useRecordPermissions";
import { PersonRecord, RecordType } from "~/types/records";
import PersonRecordPhoto from "./PersonRecordPhoto";

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

  if (record.type === RecordType.Text) {
    return <PersonRecordText record={record} />;
  }
  if (record.type === RecordType.Number) {
    return <PersonRecordNumber record={record} />;
  }
  if (record.type === RecordType.Checkbox) {
    return <PersonRecordCheckbox record={record} />;
  }
  if (record.type === RecordType.Rating) {
    return <PersonRecordRating record={record} />;
  }
  if (record.type === RecordType.Photo) {
    return <PersonRecordPhoto record={record} />;
  }

  return null;
}
