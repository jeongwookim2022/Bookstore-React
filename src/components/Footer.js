import {
  faInstagram,
  faFacebookSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterDiv, FooterInside } from "../styles/FooterStyles";

function Footer() {
  return (
    <FooterDiv>
      <FooterInside>
        <div className="footer-part1">
          <h4>Viking Books</h4>
          <a href="">
            <span>Customer Center</span>
            <FontAwesomeIcon icon={faAngleRight} className="icon" />
          </a>
          <a href="">
            <span>Announcement</span>
            <FontAwesomeIcon icon={faAngleRight} className="icon" />
          </a>
          <a href="">
            <span>Privacy Notice</span>
            <FontAwesomeIcon icon={faAngleRight} className="icon" />
          </a>
          <a href="">
            <span>Support / Help</span>
            <FontAwesomeIcon icon={faAngleRight} className="icon" />
          </a>
          <a href="">
            <span>Contact</span>
          </a>
          <h6>
            Copyright ⓒ 2023 <span>Viking Books</span> All Rights Reserved
          </h6>
        </div>
        <div className="sns-box">
          <div>
            <a href="" className="sns1">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div>
            <a href="" className="sns2">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </div>
          <div>
            <a href="" className="sns3">
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
          </div>
        </div>
      </FooterInside>
    </FooterDiv>
  );
}

export default Footer;
