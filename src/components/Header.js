import { HeaderMobile, HeaderPC } from "../styles/HeaderStyles";
import { useMediaQuery } from "react-responsive";
import HeaderMobileContent from "./HeaderMobile";
import HeaderPCContent from "./HeaderPC";

function Header() {
  const isMobile = useMediaQuery({
    query: "(max-width:780px)",
  });

  const isPC = useMediaQuery({
    query: "(min-width:781px)",
  });

  return (
    <>
      <>
        {isMobile && (
          <HeaderMobile>
            <HeaderMobileContent />
          </HeaderMobile>
        )}
      </>
      {isPC && (
        <HeaderPC>
          <HeaderPCContent />
        </HeaderPC>
      )}
    </>
  );
}

export default Header;
