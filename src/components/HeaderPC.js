import {
  faMagnifyingGlass,
  faCrown,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import { BorderBottom, BorderTop } from "../styles/Common";

function HeaderPCContent() {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faCrown} className="crown" />
        <FontAwesomeIcon icon={faTree} className="tree" />
        <div>
          <h1
            className="viking"
            onClick={() => {
              navigate("/");
            }}
          >
            Viking Books
          </h1>
        </div>
        <div className="search-sign-up-in">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={() => {
              navigate("/search");
              setIsSearch(true);
            }}
          />
          <button>Sign Up</button>
          <button>Sign In</button>
        </div>
      </div>
      <BorderBottom />
    </div>
  );
}

export default HeaderPCContent;
