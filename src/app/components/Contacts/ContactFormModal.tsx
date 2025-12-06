import { useState, type FormEvent } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { addContact } from "../../../features/contacts/contactsSlice";
import type { Contact } from "../../../features/contacts/types";
import small_cross from "/public/images/icons/small_cross.svg";
const STATES = [
  "Andhra Pradesh",
  "Bihar",
  "Gujarat",
  "Haryana",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Punjab",
];

interface ContactFormModalProps {
  onClose: () => void;
  initial?: Contact;
}

interface Errors {
  name?: string;
  email?: string;
  address1?: string;
  pincode?: string;
}

const ContactFormModal = ({ onClose, initial }: ContactFormModalProps) => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState(initial?.fullName ?? "");
  const [contactNo, setContactNo] = useState(initial?.phone ?? "");
  const [email, setEmail] = useState(initial?.email ?? "");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [pincode, setPincode] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [stateOpen, setStateOpen] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};

    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) {
      e.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      e.email = "Invalid email";
    }
    if (!address1.trim()) e.address1 = "Address Line 1 is required";
    if (!pincode.trim()) {
      e.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(pincode.trim())) {
      e.pincode = "Pincode must be 6 digits";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const addressParts = [address1.trim()];
    if (address2.trim()) addressParts.push(address2.trim());
    if (stateValue.trim()) addressParts.push(stateValue.trim());
    if (pincode.trim()) addressParts.push(pincode.trim());

    const address = addressParts.join(", ");

    const contact: Contact = {
      id: initial?.id ?? crypto.randomUUID(),
      fullName: name.trim(),
      phone: contactNo.trim(),
      email: email.trim(),
      address,
    };

    if (initial) {
      // dispatch(updateContact(contact))
    } else {
      dispatch(addContact(contact));
    }

    onClose();
  };

  const isValid = () => {
    return (
      name.trim() &&
      email.trim() &&
      address1.trim() &&
      pincode.trim() &&
      Object.keys(errors).length === 0
    );
  };

  const handleSelectState = (value: string) => {
    setStateValue(value);
    setStateOpen(false);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <header className="modal-header">
          <div className="modal-head-title">Add Contact</div>
          <img
            src={small_cross}
            alt="close"
            style={{ cursor: "pointer" }}
            onClick={onClose}
            aria-label="Close"
          />
        </header>

        <form className="modal-body" onSubmit={handleSubmit}>
          <div className="modal-form-grid">
            <div className="form-field">
              <label className="field-label">
                Name<span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="field-error">{errors.name}</p>}
            </div>

            <div className="form-field">
              <label className="field-label">Contact No.</label>
              <input
                type="text"
                placeholder="Enter contact no."
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label className="field-label">
                Email<span className="required">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="field-error">{errors.email}</p>}
            </div>

            <div className="form-field">
              <label className="field-label">
                Address Line 1<span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter address"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
              {errors.address1 && (
                <p className="field-error">{errors.address1}</p>
              )}
            </div>

            <div className="form-field">
              <label className="field-label">Address Line 2 (Optional)</label>
              <input
                type="text"
                placeholder="Enter address"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label className="field-label">State</label>
              <div
                className="state-select"
                onClick={() => setStateOpen((prev) => !prev)}
              >
                <span className={stateValue ? "" : "placeholder"}>
                  {stateValue || "Enter State"}
                </span>
                <span className="chevron">{stateOpen ? "▲" : "▼"}</span>
              </div>

              {stateOpen && (
                <div className="state-options">
                  {STATES.map((s) => (
                    <button
                      type="button"
                      key={s}
                      className="state-option"
                      onClick={() => handleSelectState(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="form-field full-width">
              <label className="field-label">
                Pincode<span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              {errors.pincode && (
                <p className="field-error">{errors.pincode}</p>
              )}
            </div>
          </div>

          <footer className="modal-footer">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className={`btn-add ${!isValid() ? "btn-disabled" : ""}`}
              disabled={!isValid()}
            >
              Add Contact
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
