import axios from "axios";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import Loading from "../components/Loading";
import { MainContainer } from "../styles/SearchStyles";

const Search = ({ title }) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(1);
  const [documents, setDocuments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const callAPI = async () => {
    if (query.length > 0) {
      const url = `https://dapi.kakao.com/v3/search/book?target=title&query=${query}&page=${page}`;
      const config = {
        headers: "Authorization: KakaoAK dc8d40f2136deeecad5055925f2695db",
      };
      const result = await axios(url, config);

      console.log(result.data);

      setDocuments(result.data.documents);
      const total = result.data.meta.pageable_count;
      setLast(Math.ceil(total / 10));
    } else {
      setDocuments([]);
    }
  };

  useEffect(() => {
    callAPI();
    setIsLoading(false);
  }, [page, isLoading]);

  const onSubmit = (e) => {
    e.preventDefault();
    callAPI();
    setPage(1);
  };

  if (isLoading == true) {
    return <Loading />;
  }
  return (
    <MainContainer className="contents mt-5">
      {/* <h1>Search Books</h1> */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search books"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          onClick={() => {
            $(".documents").html("");
            setIsLoading(true);
          }}
        >
          Search
        </button>
      </form>
      <div className="documents">
        {documents.map((d) => (
          <div className="box">
            <img
              src={
                d.thumbnail ? d.thumbnail : "http://via.placeholder.com/120X150"
              }
              alt=""
            />
            <div className="ellipsis">{d.title}</div>
          </div>
        ))}
      </div>
      <div className="next-prev-buttons">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <span style={{ margin: "10px" }}>
          {page}/{last}
        </span>
        <button onClick={() => setPage(page + 1)} disabled={page === last}>
          Next
        </button>
      </div>
    </MainContainer>
  );
};

export default Search;
