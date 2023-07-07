import { useEffect, useState } from "react";
import {
  BookGenres,
  BookSection,
  BookRecommendationBox,
  TitleEach,
} from "../styles/BookStyles";
import { BorderBottomG } from "../styles/Common";
import $ from "jquery";
import { SearchAPI } from "../routes/Search";
import Books from "./Books";
import Loading from "./Loading";

function BookRecommendation() {
  const clickedGenre = {
    background: "green",
    border: "3px solid green",
    color: "rgb(244, 229, 209)",
  };
  const unclickedGenre = {
    background: "white",
    border: "3px solid yellowgreen",
    color: "brown",
  };
  const [query, setQuery] = useState("mystery");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    findBooks();
  }, [query, isLoading]);

  const findBooks = async () => {
    const params = {
      query: query,
      sort: "latest",
      size: "9",
      target: "",
    };
    const {
      data: { documents },
    } = await SearchAPI(params);

    setBooks(documents);
    setIsLoading(false);
  };

  return (
    <>
      <BookSection className="container">
        <TitleEach>
          <h2>Recommendations by Genre</h2>
          <h1>
            <span className="plus-text">+</span>
          </h1>
        </TitleEach>
      </BookSection>
      <BorderBottomG className="container" />
      <BookGenres>
        <button
          className="genre novel"
          onClick={() => {
            setQuery("mystery");

            setIsLoading(true);

            $(".genre").css(unclickedGenre);
            $(".novel").css(clickedGenre);
          }}
        >
          Novel
        </button>
        <button
          className="genre essay"
          onClick={() => {
            setQuery("english essay");

            setIsLoading(true);

            $(".genre").css(unclickedGenre);
            $(".essay").css(clickedGenre);
          }}
        >
          Essay
        </button>
        <button
          className="genre self-development"
          onClick={() => {
            setQuery("programming");

            setIsLoading(true);

            $(".genre").css(unclickedGenre);
            $(".self-development").css(clickedGenre);
          }}
        >
          Self-development
        </button>
        <button
          className="genre real-estates"
          onClick={() => {
            setQuery("investing");

            setIsLoading(true);

            $(".genre").css(unclickedGenre);
            $(".real-estates").css(clickedGenre);
          }}
        >
          Real Estates
        </button>
        <button
          className="genre welfare"
          onClick={() => {
            setQuery("eu welfare");

            setIsLoading(true);

            $(".genre").css(unclickedGenre);
            $(".welfare").css(clickedGenre);
          }}
        >
          Welfare
        </button>
      </BookGenres>
      <BookRecommendationBox className="container">
        {books.map((book, i) => (
          <>
            {isLoading && <Loading />}
            <Books
              key={i}
              title={book.title}
              image={book.thumbnail}
              author={book.authors}
            />
          </>
        ))}
      </BookRecommendationBox>
    </>
  );
}

export default BookRecommendation;
