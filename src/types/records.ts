export enum Role {
  Coach = "COACH",
  Athelete = "ATHLETE",
}

export enum RecordType {
  Checkbox = "CHECKBOX",
  Rating = "RATING",
}

export type RecordPermissions = {
  view: Role[];
  edit: Role[];
};

export interface Record {
  id: string;
  type: RecordType;
  name: string;
  permissions: RecordPermissions;
}

export type CheckboxRecordValue = boolean;
export type RatingRecordValue = 1 | 2 | 3 | 4 | 5;

export interface PersonRecord extends Record {
  value: CheckboxRecordValue | RatingRecordValue;
}
