import { BooksContents } from "../styles/BookStyles";

function Books({ image, title, author }) {
  return (
    <BooksContents>
      <div>
        <img src={image} />
      </div>
      <div className="title-author">
        <h1>{title}</h1>
        <h3>{author}</h3>
      </div>
    </BooksContents>
  );
}

export default Books;
