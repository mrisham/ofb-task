export interface Contact {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

export interface ContactsState {
  items: Contact[];
  searchQuery: string;
  selectedIds: string[];
}
