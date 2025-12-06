import type { Contact } from "../../../features/contacts/types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { toggleSelected } from "../../../features/contacts/contactsSlice";
import deleteImg from "/public/images/icons/delete.svg";
import editImg from "/public/images/icons/edit.svg";
interface ContactRowProps {
  contact: Contact;
  onDeleteClick: (id: string) => void;
}

const ContactRow = ({ contact, onDeleteClick }: ContactRowProps) => {
  const dispatch = useAppDispatch();
  const selectedIds = useAppSelector((state) => state.contacts.selectedIds);
  const isSelected = selectedIds.includes(contact.id);

  return (
    <div className={`contact-row ${isSelected ? "selected" : ""}`}>
      <div className="cell checkbox">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => dispatch(toggleSelected(contact.id))}
        />
      </div>

      <div className="cell name">{contact.fullName}</div>
      <div className="cell phone">{contact.phone}</div>
      <div className="cell email">{contact.email}</div>
      <div className="cell address">{contact.address}</div>

      <div className="cell actions">
        <div className="action-item">
          <button className="icon-btn edit-btn">
            <img src={editImg} alt="edit" />
          </button>
          <span className="action-label">Edit</span>
        </div>

        <div className="action-item">
          <button
            className="icon-btn delete-btn"
            onClick={() => onDeleteClick(contact.id)}
          >
            <img src={deleteImg} alt="delete" />
          </button>
          <span className="action-label">Delete</span>
        </div>
      </div>
    </div>
  );
};

export default ContactRow;
