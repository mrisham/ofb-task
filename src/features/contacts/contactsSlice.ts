import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Contact, ContactsState } from "./types";

const initialState: ContactsState = {
  items: [
    {
      id: "1",
      fullName: "Priya Sharma",
      email: "example.priya@gmail.com",
      phone: "98734 8332",
      address:
        "Plot No. 57, Industrial Area Phase 2, Chandigarh, Punjab, 160002",
    },
    {
      id: "2",
      fullName: "Rahul Mehta",
      email: "example.rahul@example.com",
      phone: "91234 8332",
      address:
        "Unit 4B, MIDC Taloja, Sector 10, Navi Mumbai, Maharashtra, 410208",
    },
    {
      id: "3",
      fullName: "Sneha Rao",
      email: "example.sneha@example.com",
      phone: "82734 8332",
      address:
        "Khasra No. 432, Village Behrampur, Sector 59, Gurugram, Haryana, 122101",
    },
    {
      id: "4",
      fullName: "Tanvi Verma",
      email: "example.tanvi@example.com",
      phone: "93734 8332",
      address:
        "Building 12, Tech Park, Electronic City, Bengaluru, Karnataka, 560100",
    },
    {
      id: "5",
      fullName: "Gaurav Agarwal",
      email: "example.gaurav@example.com",
      phone: "94234 8332",
      address: "Plot No. 23, Sector 15, Noida, Uttar Pradesh, 201301",
    },
    {
      id: "6",
      fullName: "Ritika Singh",
      email: "example.ritika@example.com",
      phone: "86543 2109",
      address:
        "Flat 402, Gold Nest, Lokhandwala Complex, Andheri, Mumbai, Maharashtra, 400053",
    },
    {
      id: "7",
      fullName: "Kavya Gupta",
      email: "example.kavya@example.com",
      phone: "97654 3210",
      address:
        "Survey No. 45, Near Railway Station, Jodhpur, Rajasthan, 342001",
    },
  ],
  searchQuery: "",
  selectedIds: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.items.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const idx = state.items.findIndex((c) => c.id === action.payload.id);
      if (idx !== -1) state.items[idx] = action.payload;
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((c) => c.id !== action.payload);
      state.selectedIds = state.selectedIds.filter(
        (id) => id !== action.payload
      );
    },
    bulkDelete: (state) => {
      if (!state.selectedIds.length) return;
      state.items = state.items.filter(
        (c) => !state.selectedIds.includes(c.id)
      );
      state.selectedIds = [];
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    toggleSelected: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.selectedIds.includes(id)) {
        state.selectedIds = state.selectedIds.filter((sid) => sid !== id);
      } else {
        state.selectedIds.push(id);
      }
    },
    selectAllVisible: (state, action: PayloadAction<string[]>) => {
      state.selectedIds = action.payload;
    },
    clearSelection: (state) => {
      state.selectedIds = [];
    },
  },
});

export const {
  addContact,
  updateContact,
  deleteContact,
  bulkDelete,
  setSearchQuery,
  toggleSelected,
  selectAllVisible,
  clearSelection,
} = contactsSlice.actions;

export default contactsSlice.reducer;
