function Books({ image, title, author }) {
  return (
    <>
      <div className="book-wrapper">
        <div className="book-img-box">
          <img
            src={image ? image : "http://via.placeholder.com/120X174"}
            alt=""
          />
        </div>
        <div className="title-author">
          <h1>{title}</h1>
          <h3>{author}</h3>
        </div>
      </div>
    </>
  );
}

export default Books;
