import { RecordType, Role } from "~/types/records";

export const RECORDS_KEY = "records";
export const RECORDS_URL = "/groups/:id/records";

export const ROLE_MAP = {
  [Role.Coach]: "Тренер",
  [Role.Athelete]: "Спортсмен",
};

export const RECORD_TYPE_MAP = {
  [RecordType.Text]: "Текст",
  [RecordType.Number]: "Число",
  [RecordType.Checkbox]: "Прапорець",
  [RecordType.Rating]: "Емоції",
  [RecordType.Photo]: "Фото",
};
