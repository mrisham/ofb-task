import type { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setSearchQuery } from "../../../features/contacts/contactsSlice";
import searchIcon from "/images/icons/search.svg";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.contacts.searchQuery);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search by Name, Contact, Email, State..."
        value={searchQuery}
        onChange={handleChange}
      />
      <img src={searchIcon} alt="searchIcon" className="search-icon" />
    </div>
  );
};

export default SearchBar;
