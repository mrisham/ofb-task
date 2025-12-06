# OFB Contact Manager

A responsive contact management interface built using **React + TypeScript + Redux Toolkit** as part of the OFB frontend assignment.  
The app supports adding, editing, deleting, searching, and bulk actions on contacts, with a modern UI and clean logical structure.

---

## 📸 Screenshots

### Main Contact List

![Contact List](Screenshot%202025-12-06%20182027.png)

### Add/Edit Contact Modal

![Contact Form](Screenshot%202025-12-06%20182009.png)

### Search Functionality

![Search](Screenshot%202025-12-06%20181910.png)

### Bulk Actions

![Bulk Actions](Screenshot%202025-12-06%20182837.png)

### Delete Confirmation

![Delete Modal](Screenshot%202025-12-06%20182037.png)

---

## Tech Stack

- **React** + **TypeScript**
- **Vite**
- **Redux Toolkit**
- Custom CSS
- SVG Icon Assets

---

## Installation & Running Locally

```bash
# Clone repository
git clone https://github.com/mrisham/ofb-task.git

# Navigate into project
cd ofb-task

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📁 Folder Structure

```
src/
├── app/
│   └── store.ts
├── features/
│   └── contacts/
│       ├── contactsSlice.ts
│       ├── selectors.ts
│       └── types.ts
├── components/
│   ├── Layout/
│   │   └── PageLayout.tsx
│   └── Contacts/
│       ├── ContactsPage.tsx
│       ├── ContactList.tsx
│       ├── ContactRow.tsx
│       ├── ContactFormModal.tsx
│       ├── DeleteConfirmModal.tsx
│       ├── Toolbar.tsx
│       └── SearchBar.tsx
├── styles/
│   └── contacts.css
└── main.tsx
```

---

## Features

- Add, edit, and delete contacts
- Search/filter contacts by name, email, or phone
- Bulk selection and deletion
- Form validation
- Responsive design
- Clean Redux state management

---

## Assumptions

- Contacts are stored only in Redux state (no persistence required per assignment)
- State dropdown contains predefined values (not dynamic)
- Phone validation was not explicitly required; therefore kept permissive

---

## Known Limitations

- Data resets on refresh (no persistence layer)
- Sorting and pagination are not implemented
- Dropdown closes only when clicked or value selected (click-outside optional improvement)

---

## License

This project is part of a frontend assignment for OFB.

---

## Author

**Mridul Shukla**  
GitHub: [@mrisham](https://github.com/mrisham)
