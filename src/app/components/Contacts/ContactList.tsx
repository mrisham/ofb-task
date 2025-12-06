import type { Contact } from "../../../features/contacts/types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectAllVisible,
  clearSelection,
} from "../../../features/contacts/contactsSlice";
import ContactRow from "./ContactRow";

interface ContactListProps {
  contacts: Contact[];
  onDeleteClick: (id: string) => void;
}

const ContactList = ({ contacts, onDeleteClick }: ContactListProps) => {
  const dispatch = useAppDispatch();
  const selectedIds = useAppSelector((state) => state.contacts.selectedIds);

  const allVisibleSelected =
    contacts.length > 0 && contacts.every((c) => selectedIds.includes(c.id));

  const handleToggleAll = () => {
    if (allVisibleSelected) {
      dispatch(clearSelection());
    } else {
      dispatch(selectAllVisible(contacts.map((c) => c.id)));
    }
  };

  return (
    <div className="contact-table-wrapper">
      <div className="contact-table">
        {/* Sticky Header */}
        <div className="contact-table-header">
          <div className="cell checkbox">
            <input
              type="checkbox"
              checked={allVisibleSelected}
              onChange={handleToggleAll}
            />
          </div>
          <div className="cell name">Name</div>
          <div className="cell phone">Contact</div>
          <div className="cell email">Email</div>
          <div className="cell address">Address</div>
          <div className="cell actions">Action</div>
        </div>

        {/* Scrollable body */}
        <div className="contact-table-body">
          {contacts.map((contact) => (
            <ContactRow
              key={contact.id}
              contact={contact}
              onDeleteClick={onDeleteClick}
            />
          ))}

          {contacts.length === 0 && (
            <div className="contact-empty">No contacts found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
