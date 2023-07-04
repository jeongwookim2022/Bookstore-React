import { HeaderMobile, HeaderPC } from "../styles/HeaderStyles";
import { useMediaQuery } from "react-responsive";
import HeaderMobileContent from "./HeaderMobile";

function Header() {
  const isMobile = useMediaQuery({
    query: "(max-width:780px)",
  });

  const isPC = useMediaQuery({
    query: "(min-width:781px)",
  });

  const toBestSeller = () => {
    window.scrollTo({ top: 1400, behavior: "smooth" });
  };

  return (
    <>
      {isMobile && (
        <HeaderMobile>
          <HeaderMobileContent />
        </HeaderMobile>
      )}
    </>
  );
}

export default Header;
