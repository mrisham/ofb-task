# OFB Contact Manager

A responsive contact management interface built using **React + TypeScript + Redux Toolkit** as part of the OFB frontend assignment.  
The app supports adding, editing, deleting, searching, and bulk actions on contacts, with a modern UI and clean logical structure.

---

## Tech Stack

- **React + TypeScript**
- **Vite**
- **Redux Toolkit**
- Custom CSS
- SVG Icon Assets

---

## Installation & Running Locally

```sh
# Clone repository
git clone https://github.com/mrisham/ofb-task.git

# Navigate into project
cd ofb-task

# Install dependencies
npm install

# Start development server
npm run dev
```

# Folder Structure

src/
├─ app/
│ └─ store.ts
├─ features/
│ └─ contacts/
│ ├─ contactsSlice.ts
│ ├─ selectors.ts
│ └─ types.ts
├─ components/
│ ├─ Layout/
│ │ └─ PageLayout.tsx
│ └─ Contacts/
│ ├─ ContactsPage.tsx
│ ├─ ContactList.tsx
│ ├─ ContactRow.tsx
│ ├─ ContactFormModal.tsx
│ ├─ DeleteConfirmModal.tsx
│ ├─ Toolbar.tsx
│ └─ SearchBar.tsx
├─ styles/
│ └─ contacts.css
└─ main.tsx
