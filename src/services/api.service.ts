import axios, { AxiosResponse } from "axios";
import { baseURL, urls } from "../constants/urls";

import { IContactCreate } from "../models/IContactCreate";
import { IContactItem } from "../models/IContactItem";
import { IContactResponse } from "../models/IContactResponse";
import { IContactsResponse } from "../models/IContactsResponse";
import { ITag } from "../models/Tag";

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}` },
});

export const apiService = {
  getContactsList: async (params: {
    sort?: string;
  }): Promise<AxiosResponse<IContactsResponse>> => {
    const res = await axiosInstance.get<IContactsResponse>(
      urls.contacts.list +
        (params ? "?" + new URLSearchParams(params).toString() : ""),
    );
    return res;
  },

  getContactDetails: async (
    id: string,
  ): Promise<AxiosResponse<IContactResponse>> => {
    const res = await axiosInstance.get<IContactResponse>(
      urls.contacts.details(id),
    );
    return res;
  },

  createContact: async (
    data: IContactCreate,
  ): Promise<AxiosResponse<IContactItem>> => {
    const res = await axiosInstance.post<IContactItem>(
      urls.contacts.create,
      data,
    );
    return res;
  },

  deleteContact: async (id: string): Promise<AxiosResponse<IContactItem>> => {
    const res = await axiosInstance.delete<IContactItem>(
      urls.contacts.delete(id),
    );
    return res;
  },

  addTag: async (contactId: string, tags: string[]) => {
    const res = await axiosInstance.put<ITag>(urls.tags.add(contactId), {
      tags,
    });
    return res;
  },
};
