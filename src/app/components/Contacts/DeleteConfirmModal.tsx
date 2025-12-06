import {
  bulkDelete,
  deleteContact,
} from "../../../features/contacts/contactsSlice";
import { useAppDispatch } from "../../../app/hooks";
import small_cross from "/public/images/icons/small_cross.svg";
import deleteImg from "/public/images/icons/delete_modal.svg";
interface DeleteConfirmModalProps {
  mode: "single" | "bulk";
  contactId: string | null;
  onClose: () => void;
  selectedCount?: number;
}

const DeleteConfirmModal = ({
  mode,
  contactId,
  onClose,
  selectedCount,
}: DeleteConfirmModalProps) => {
  const dispatch = useAppDispatch();

  const handleConfirm = () => {
    if (mode === "single" && contactId) {
      dispatch(deleteContact(contactId));
    }
    if (mode === "bulk") {
      dispatch(bulkDelete());
    }
    onClose();
  };
  const title =
    mode === "bulk"
      ? `Delete Contacts (${selectedCount ?? 0})`
      : "Delete Contact";
  return (
    <div className="modal-backdrop">
      <div className="delete-modal">
        <header className="delete-modal-header">
          <div className="modal-delete-sec1">
            <img src={deleteImg} alt="close" />
            <div className="delete-modal-head-title">{title}</div>
          </div>
          <img
            src={small_cross}
            alt="close"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </header>

        <div className="delete-modal-body">
          <p>
            Are you sure you want to delete{" "}
            {mode === "bulk"
              ? `${selectedCount ?? 0} contact(s)?`
              : "this contact?"}
            . This action cannot be undone.
          </p>
        </div>

        <footer className="delete-modal-footer">
          <button className="cancel-btn-delete" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-delete-modal" onClick={handleConfirm}>
            Delete
          </button>
        </footer>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
