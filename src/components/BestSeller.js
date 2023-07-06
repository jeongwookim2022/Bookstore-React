import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SearchAPI } from "../routes/Search";
import Books from "./Books";
import { BorderBottomG } from "../styles/Common";
import { TitleEach, BookSection, BooksBox } from "../styles/BookStyles";

function BestSeller() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    findBooks();
  }, []);

  const findBooks = async () => {
    const params = {
      query: "scandinavian",
      sort: "",
      size: "8",
      target: "",
    };
    const {
      data: { documents },
    } = await SearchAPI(params);

    setBooks(documents);
  };

  return (
    <>
      <BookSection className="container">
        <TitleEach>
          <h2>BestSellers</h2>
          <h1>+</h1>
        </TitleEach>
      </BookSection>
      <BorderBottomG className="container" />
      <BooksBox className="container">
        {books.map((book, i) => (
          <Books
            key={i}
            title={book.title}
            image={book.thumbnail}
            author={book.authors}
          />
        ))}
      </BooksBox>
    </>
  );
}

export default BestSeller;
