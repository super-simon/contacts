import { IContactItem } from "./IContactItem";

export interface IContactsResponse {
  meta: {
    page: number;
    pages: number;
    per_page: number;
    total: number;
  };
  resources: IContactItem[];
}
