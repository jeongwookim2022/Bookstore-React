import CarouselMain from "../components/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../components/Footer";
import HeaderPCnavbar from "../components/HeaderPCnavbar";
import { useMediaQuery } from "react-responsive";
import BestSeller from "../components/BestSeller";
import BookToday from "../components/BookToday";
import BooksNew from "../components/BooksNew";
import BookRecommendation from "../components/BookRecommend";
import BooksLanguage from "../components/BooksLanguage";
import BooksDepressed from "../components/BooksDepressed";
import MovieQuote from "../components/MovieQuote";

function MainPage() {
  const isPC = useMediaQuery({
    query: "(min-width:781px)",
  });

  return (
    <>
      {isPC && <HeaderPCnavbar />}
      <CarouselMain />
      <BookToday />
      <BestSeller />
      <BooksNew />
      <BookRecommendation />
      <BooksLanguage />
      <BooksDepressed />
      <MovieQuote />
      <Footer />
    </>
  );
}

export default MainPage;
