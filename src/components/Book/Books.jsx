import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";

const URL = "https://bookstore-backend-cyan.vercel.app/books";

const fetchHandler = async () => {
  axios.defaults.withCredentials = true;
  return await axios.get(URL,{
  withCredentials: true, // Ensure credentials (cookies) are included
}).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
