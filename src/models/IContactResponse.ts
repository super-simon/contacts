import { IContactItem } from "./IContactItem";

export interface IContactResponse {
  meta: {
    page: number;
    pages: number;
    per_page: number;
    total: number;
  };
  resources: [IContactItem];
}
