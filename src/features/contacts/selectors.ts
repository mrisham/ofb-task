import type { RootState } from "../../app/store";

export const selectContactsState = (state: RootState) => state.contacts;

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectSearchQuery = (state: RootState) =>
  state.contacts.searchQuery;
export const selectSelectedIds = (state: RootState) =>
  state.contacts.selectedIds;
