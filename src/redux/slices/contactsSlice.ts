import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IContactItem } from "../../models/IContactItem";
import { apiService } from "../../services/api.service";

type ContactsSliceType = {
  contacts: IContactItem[];
  page: number;
  totalPages: number | null;
  totalResults: number | null;
};

const contactsInitialState: ContactsSliceType = {
  contacts: [],
  page: -1,
  totalPages: null,
  totalResults: null,
};

const loadContacts = createAsyncThunk(
  "contactsSlice/loadContacts",
  async (_, thunkAPI) => {
    try {
      const params = { sort: "created:desc" };
      const contactsResponse = await apiService.getContactsList(params);
      return thunkAPI.fulfillWithValue(contactsResponse.data);
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
);

export const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState: contactsInitialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadContacts.fulfilled, (state, action) => {
      state.totalPages = action.payload?.meta.pages || null;
      state.totalResults = action.payload?.meta.total || null;
      state.contacts = action.payload?.resources || [];
    });
  },
});

export const contactsActions = {
  ...contactsSlice.actions,
  loadContacts,
};
