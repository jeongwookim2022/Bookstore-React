import CarouselMain from "../components/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../components/Footer";
import HeaderPCnavbar from "../components/HeaderPCnavbar";
import { useMediaQuery } from "react-responsive";

function MainPage() {
  const isPC = useMediaQuery({
    query: "(min-width:781px)",
  });

  return (
    <>
      {isPC && <HeaderPCnavbar />}
      <CarouselMain />
      <Footer />
    </>
  );
}

export default MainPage;
