import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book ? book.title : "");

  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //callback with title
    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange} className="input" />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
