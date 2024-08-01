import axios, { AxiosResponse } from "axios";
import { baseURL, urls } from "../constants/urls";

import { IContactItem } from "../models/IContactItem";
import { IContactResponse } from "../models/IContactResponse";
import { IContactsResponse } from "../models/IContactsResponse";

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

  getContactDetails: async ({
    id,
  }: {
    id: string | number;
  }): Promise<AxiosResponse<IContactResponse>> => {
    const res = await axiosInstance.get<IContactResponse>(
      urls.contacts.details(id),
    );
    return res;
  },

  createContact: async ({
    query,
  }: {
    query: string;
  }): Promise<AxiosResponse<IContactItem>> => {
    const res = await axiosInstance.post<IContactItem>(
      urls.contacts.create + query,
    );
    return res;
  },

  deleteContact: async ({
    id,
  }: {
    id: string | number;
  }): Promise<AxiosResponse<IContactItem>> => {
    const res = await axiosInstance.post<IContactItem>(
      urls.contacts.delete(id),
    );
    return res;
  },
};
