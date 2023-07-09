import { BorderBottomG } from "../styles/Common";
import { TitleEach, BookSection } from "../styles/BookStyles";
import { Quote, QuoteBox, QuoteInfo } from "../styles/QuoteStyles";

function MovieQuote() {
  return (
    <>
      <BookSection className="container">
        <TitleEach>
          <h2>A Quote of the day</h2>
          <h1>
            <span className="plus-text">+</span>
          </h1>
        </TitleEach>
      </BookSection>
      <BorderBottomG className="container" />
      <QuoteBox>
        <img
          className="col-lg-10 col-sm-12"
          src="https://i.ytimg.com/vi/NdPYAwc1y30/maxresdefault.jpg"
        />
        <Quote>
          ❝ I figure life's a gift and I don't intend on wasting it. You don't
          know what hand your gonna get dealt next. You learn to take life as it
          comes at you to make each day count. ❞
        </Quote>
        <QuoteInfo>Jack Dawson | Titanic</QuoteInfo>
      </QuoteBox>
    </>
  );
}
export default MovieQuote;
