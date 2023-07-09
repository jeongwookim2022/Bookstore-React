import {
  faBook,
  faBookOpen,
  faCircleUser,
  faCrown,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

function HeaderMobileContent() {
  const [isOpen, setOpen] = useState(false);
  const togglenNav = () => {
    setOpen((isOpen) => !isOpen);
  };
  const navigate = useNavigate();

  const toBestSeller = () => {
    window.scrollTo({ top: 1250, behavior: "smooth" });
  };
  const toCategory = () => {
    window.scrollTo({ top: 2110, behavior: "smooth" });
  };

  return (
    <>
      <div>
        <div>
          {isOpen ? (
            <>
              <FontAwesomeIcon
                icon={faBookOpen}
                onClick={() => {
                  togglenNav();
                  $(".open-links").css("transform", `translateX(-100%)`);
                }}
                className="icon"
              />
            </>
          ) : (
            <FontAwesomeIcon
              icon={faBook}
              onClick={() => {
                togglenNav();
                $(".open-links").css("transform", `translateX(0)`);
              }}
              className="icon-book"
            />
          )}
        </div>
        <div className="viking-crown-tree-title">
          <FontAwesomeIcon icon={faCrown} className="crown" />
          <FontAwesomeIcon icon={faTree} className="tree" />
          <Link
            className="link"
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
          >
            <h1>Viking Books</h1>
          </Link>
        </div>
        <div>
          <Link to="/signup" className="link">
            <FontAwesomeIcon icon={faCircleUser} className="icon" />
          </Link>
        </div>
      </div>
      {/* OPEN NAVs */}
      <div className="open-links">
        <p>
          <Link
            className="link"
            onClick={() => {
              toBestSeller();
            }}
          >
            BesteSeller
          </Link>
        </p>
        <p>
          <Link
            className="link"
            onClick={() => {
              toCategory();
            }}
          >
            Category
          </Link>
        </p>
        <p>
          <Link to="" className="link">
            Wish List
          </Link>
        </p>
        <p>
          <Link
            to="/search"
            onClick={() => {
              $(".open-links").css("transform", `translateX(-100%)`);
              togglenNav();
            }}
            className="link"
          >
            Search
          </Link>
        </p>
      </div>
    </>
  );
}

export default HeaderMobileContent;
