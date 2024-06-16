export enum Role {
  Coach = "COACH",
  Athelete = "ATHLETE",
}

export enum RecordType {
  Text = "TEXT",
  Number = "NUMBER",
  Checkbox = "CHECKBOX",
  Rating = "RATING",
  Photo = "PHOTO",
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

export type TextRecordValue = string;
export type NumberRecordValue = string;
export type CheckboxRecordValue = boolean;
export type RatingRecordValue = 1 | 2 | 3 | 4 | 5;
export type PhotoRecordValue = string;

export interface PersonRecord extends Record {
  value:
    | TextRecordValue
    | NumberRecordValue
    | CheckboxRecordValue
    | RatingRecordValue
    | PhotoRecordValue;
}
