import { useState } from "react";
import "../SearchBar.css";

function SearchBar({ onSumbit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    /*
    default behavior for form submit is create network request to host with form labels and values attached as params
    -we do not want this reload
    */
    onSumbit(term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
