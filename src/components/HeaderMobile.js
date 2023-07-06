import {
  faBook,
  faBookOpen,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

function HeaderMobileContent() {
  const [isOpen, setOpen] = useState(false);
  const togglenNav = () => {
    setOpen((isOpen) => !isOpen);
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
        <div>
          <Link to="/" className="link">
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
        <box>
          <Link to="" className="link">
            BesteSeller
          </Link>
        </box>
        <box>
          <Link to="" className="link">
            Category
          </Link>
        </box>
        <box>
          <Link to="" className="link">
            Wish List
          </Link>
        </box>
        <box>
          <Link
            to="/search"
            onClick={() => {
              // window.location.replace("/search");
              $(".open-links").css("transform", `translateX(-100%)`);
              togglenNav();
            }}
            className="link"
          >
            Search
          </Link>
        </box>
      </div>
    </>
  );
}

export default HeaderMobileContent;
