import { useNavigate } from "react-router-dom";
import { HeaderPCnavbarWrapper } from "../styles/HeaderStyles";

function HeaderPCnavbar() {
  const toBestSeller = () => {
    window.scrollTo({ top: 900, behavior: "smooth" });
  };
  const toCategory = () => {
    window.scrollTo({ top: 1900, behavior: "smooth" });
  };
  const navigate = useNavigate();

  return (
    <HeaderPCnavbarWrapper>
      <div className="header-pc-nav">
        <h5
          onClick={() => {
            toBestSeller();
          }}
        >
          BestSeller
        </h5>
        <h5
          onClick={() => {
            toCategory();
          }}
        >
          Category
        </h5>
        <h5>Events</h5>
        <h5
          onClick={() => {
            navigate("/search");
          }}
        >
          Search
        </h5>
      </div>
    </HeaderPCnavbarWrapper>
  );
}

export default HeaderPCnavbar;
