import axios from "axios";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import Loading from "../components/Loading";
import { MainContainer } from "../styles/SearchStyles";
import Footer from "../components/Footer";

const Search = ({ title }) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("accuracy");
  const [last, setLast] = useState(1);
  const [documents, setDocuments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showNP, setShowNP] = useState(false);
  const [showAccLat, setShowAccLat] = useState(false);

  const notClicked = {
    "background-color": "white",
    color: "brown",
    border: "1px solid brown",
  };
  const clicked = {
    "background-color": "brown",
    color: "white",
    border: "1px solid brown",
  };

  const callAPI = async () => {
    if (query.length > 0) {
      const url = `https://dapi.kakao.com/v3/search/book?target=title&query=${query}&page=${page}&sort=${sort}`;
      const config = {
        headers: "Authorization: KakaoAK dc8d40f2136deeecad5055925f2695db",
      };
      const result = await axios(url, config);

      console.log(result.data);

      setDocuments(result.data.documents);
      const total = result.data.meta.pageable_count;
      setLast(Math.ceil(total / 10));

      setShowAccLat(true);
      setShowNP(true);
    } else {
      setDocuments([]);
    }
  };

  useEffect(() => {
    callAPI();
    setIsLoading(false);
  }, [page, isLoading, sort]);

  const onSubmit = () => {
    callAPI();
    setPage(1);
  };

  if (isLoading == true) {
    return <Loading />;
  }
  return (
    <MainContainer className="contents mt-5">
      <form onSubmit={onSubmit}>
        <input
          className="container"
          type="text"
          placeholder="Search books"
          value={query}
          onChange={(e) => {
            e.preventDefault();
            setQuery(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsLoading(true);
            $(".documents").html("");
          }}
        >
          Search
        </button>
      </form>
      {showAccLat && (
        <div className="accuracy-latest-btns container">
          <button
            onClick={() => {
              setSort("accuracy");
              setIsLoading(true);

              $(".accuracy").css(clicked);
              $(".latest").css(notClicked);
            }}
            className="accuracy"
          >
            Accuracy
          </button>
          <button
            onClick={() => {
              setSort("latest");
              setIsLoading(true);

              $(".latest").css(clicked);
              $(".accuracy").css(notClicked);
            }}
            className="latest"
          >
            Latest
          </button>
        </div>
      )}

      <div className="documents container">
        {documents.map((d) => (
          <div className="box">
            <img
              src={
                d.thumbnail ? d.thumbnail : "http://via.placeholder.com/120X174"
              }
              alt=""
            />
            <div className="ellipsis">{d.title}</div>
            <div>{`￦${d.price
              .toString()
              .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}`}</div>
          </div>
        ))}
      </div>
      {showNP && (
        <div className="next-prev-buttons">
          <button
            onClick={() => {
              setPage(page - 1);
              setIsLoading(true);
            }}
            disabled={page === 1}
          >
            Prev
          </button>
          <span style={{ margin: "10px" }}>
            {page}/{last}
          </span>
          <button
            onClick={() => {
              setPage(page + 1);
              setIsLoading(true);
            }}
            disabled={page === last}
          >
            Next
          </button>
        </div>
      )}

      <Footer />
    </MainContainer>
  );
};
export default Search;

// BOOKS API
const REST_API_KEY = "dc8d40f2136deeecad5055925f2695db";
const result = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${REST_API_KEY}`,
  },
});
export const SearchAPI = (params) => {
  return result.get("/v3/search/book", { params });
};
