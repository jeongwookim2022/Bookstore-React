import Footer from "../components/Footer";
import { SignForm, SignUpMain } from "../styles/SignStyles";
import {
  faGoogle,
  faFacebookSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  return (
    <>
      <SignUpMain>
        <SignForm>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="submit">
            Sign in
          </button>
          <div>OR</div>
          <button className="google">
            <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            Sign in with Google
          </button>
          <button className="facebook">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="facebook-icon"
            />
            Sign in with Facebook
          </button>
          <button className="github">
            <FontAwesomeIcon icon={faGithub} className="github-icon" />
            Sign in with GitHub
          </button>
          <div className="account-text">
            <span
              className="have-or-not-account"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Don't have an account yet?
              <span className="sign-in-up-arrow"> Sign Up →</span>
            </span>
          </div>
        </SignForm>
      </SignUpMain>
      <Footer />
    </>
  );
}
export default SignIn;
