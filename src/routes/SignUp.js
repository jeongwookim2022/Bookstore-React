import Footer from "../components/Footer";
import { SignForm, SignUpMain } from "../styles/SignStyles";
import {
  faGoogle,
  faFacebookSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  return (
    <>
      <SignUpMain>
        <SignForm>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Verify password" />
          {/* <input type="sumbit" value={"SignUp"} /> */}
          <button type="submit" className="submit">
            Sign Up
          </button>
          <div>OR</div>
          <button className="google">
            <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            Sign up with Google
          </button>
          <button className="facebook">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="facebook-icon"
            />
            Sign up with Facebook
          </button>
          <button className="github">
            <FontAwesomeIcon icon={faGithub} className="github-icon" />
            Sign up with GitHub
          </button>
          <div className="account-text">
            <span
              className="have-or-not-account"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Already have an account?
              <span className="sign-in-up-arrow"> Sign In →</span>
            </span>
          </div>
        </SignForm>
      </SignUpMain>
      <Footer />
    </>
  );
}
export default SignUp;
