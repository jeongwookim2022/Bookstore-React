import { styled } from "styled-components";

export const QuoteBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 550px;

  img {
    margin-top: 40px;
    filter: brightness(45%);
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const Quote = styled.div`
  position: absolute;
  top: 37%;
  padding: 30px;
  width: 800px;

  @media (max-width: 780px) {
    width: 100%;
  }

  color: white;
`;

export const QuoteInfo = styled.h5`
  position: absolute;
  top: 60%;
  padding: 10px;

  color: white;
`;
