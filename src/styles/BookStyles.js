import { styled } from "styled-components";

export const BookSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitleEach = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  margin: 20px 0 0 0;

  h2,
  h1 {
    width: 50%;
  }
  h2 {
    text-align: left;
    margin-left: 20px;
  }
  h1 {
    text-align: right;
    margin-right: 20px;
  }
`;

export const BooksBox = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bebebe7a;
    background-clip: padding-box;
    border: 6px solid transparent;
    border-radius: 10px;
  }
`;
export const BooksContents = styled.div`
  margin-top: 30px;
  text-align: left;
  margin-right: 10px;
  &:first-child {
    margin-left: 10px;
  }
  &:last-child {
    margin-right: 0;
  }

  img {
    box-shadow: rgba(0, 0, 0, 0.08) 1px 1px 2px, rgba(0, 0, 0, 0.1) 0px 0px 2px;
    border: 3px solid rgba(70, 70, 70, 0.11);
    border-bottom: 1px solid rgba(70, 70, 70, 0.11);
    border-left: 1px solid rgba(70, 70, 70, 0.11);
    cursor: pointer;
  }
  .title-author {
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    width: 125px;
    font-size: 16px;
  }
  h3 {
    width: 125px;
    font-size: 13px;
    color: gray;
  }
`;

export const BookTodayWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 35px;

  .book-today {
    display: flex;
    justify-content: space-around;

    flex-direction: row;
    width: 40%;
    border: 1px solid rgb(225, 225, 225);
    border-radius: 10px;
    padding: 30px;
    box-sizing: border-box;

    img {
      width: 160px;
      height: 220px;
    }
    .book-today-title-author {
      padding-top: 35px;
      h1 {
        width: 125px;
        font-size: 20px;
      }
      h3 {
        width: 125px;
        font-size: 14px;
        color: gray;
      }
      h6 {
        color: gold;
        padding-top: 20px;
      }
    }
  }
  .detail-review {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin-left: 35px;

    .detail {
      display: flex;
      border: 1px solid rgb(225, 225, 225);
      border-radius: 10px;
      padding: 20px;
      height: 45%;
      margin-bottom: 15px;

      font-size: 15.6px;
      text-align: left;
    }
    .review {
      height: 55%;
      border: 1px solid rgb(225, 225, 225);
      border-radius: 10px;
      padding: 20px;
      margin-top: 10px;

      font-size: 14.5px;
      text-align: center;
      img {
        margin-bottom: 10px;
        width: 70%;
        height: 50px;
      }
    }
  }

  @media (max-width: 780px) {
    display: block;
    .book-today {
      width: 100%;
    }
    .detail-review {
      width: 100%;
      margin-left: 0;
      .detail {
        margin-top: 15px;
      }
      .review {
        margin-top: 15px;
      }
    }
  }
`;
