import { useState } from "react";
import PageLayout from "../Layout/PageLayout";
import { useAppSelector } from "../../../app/hooks";
import { selectContactsState } from "../../../features/contacts/selectors";
import SearchBar from "./SearchBar";
import Toolbar from "./Toolbar";
import ContactList from "./ContactList";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ContactFormModal from "./ContactFormModal";
import "../../styles/contacts.css";

const ContactsPage = () => {
  const { items, searchQuery, selectedIds } =
    useAppSelector(selectContactsState);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteMode, setDeleteMode] = useState<"single" | "bulk">("single");
  const [contactToDeleteId, setContactToDeleteId] = useState<string | null>(
    null
  );

  const [isFormOpen, setIsFormOpen] = useState(false);

  const filtered = items.filter((contact) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;

    return (
      contact.fullName.toLowerCase().includes(q) ||
      contact.email.toLowerCase().includes(q) ||
      contact.phone.toLowerCase().includes(q) ||
      contact.address.toLowerCase().includes(q)
    );
  });

  return (
    <PageLayout>
      <div className="contacts-page">
        <h2 className="contacts-title-page">Contact Manager</h2>
        <section className="contacts-card">
          <div className="contacts-header-row">
            <SearchBar />
            <Toolbar
              onAddClick={() => setIsFormOpen(true)}
              onBulkDeleteClick={() => {
                setDeleteMode("bulk");
                setContactToDeleteId(null);
                setIsDeleteOpen(true);
              }}
              selectedCount={selectedIds.length}
            />
          </div>

          <ContactList
            contacts={filtered}
            onDeleteClick={(id) => {
              setDeleteMode("single");
              setContactToDeleteId(id);
              setIsDeleteOpen(true);
            }}
          />

          {isDeleteOpen && (
            <DeleteConfirmModal
              mode={deleteMode}
              contactId={contactToDeleteId}
              onClose={() => setIsDeleteOpen(false)}
              selectedCount={
                deleteMode === "bulk" ? selectedIds.length : undefined
              }
            />
          )}

          {isFormOpen && (
            <ContactFormModal onClose={() => setIsFormOpen(false)} />
          )}
        </section>
      </div>
    </PageLayout>
  );
};

export default ContactsPage;
