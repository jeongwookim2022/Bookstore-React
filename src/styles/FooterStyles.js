import styled from "styled-components";
import { maxWidth } from "./Common";

export const FooterDiv = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 10px;
  position: relative;
  bottom: -90px;

  border-top: 5px solid green;
`;
export const FooterInside = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  padding-bottom: 0px

  height: 150px;
  .footer-part1 {
    margin-left: 100px;
  }

  // VIKINGS
  h4 {
    font-size: 28px;
    text-align: left;
    margin-top: 35px;
    margin-bottom: 45px;
    font-family: "Cookie", cursive;
  }

  // COPYRIGHT
  div {
    h6 {
      text-align: left;
      color: gray;
      font-size: 14px;
      margin-top: 15px;
      span {
        font-family: "Cookie", cursive;
      }
    }
  }

  // COSTOMER MENY
  .footer-part1 {
    a {
      text-decoration: none;
      color: gray;
      span {
        font-size: 15px;
      }
      .icon {
        margin: 0 4px;
      }
    }
  }

  // SNS
  .sns-box {
    display: flex;
    margin-top: 31px;
    margin-left: 400px;
    margin-right: 10px;
    position: absolute;
    right: 100px;

    a {
      font-size: 33px;
      padding: 9px;
      color: black;
    }
  }

  @media (max-width: 780px) {
    .footer-part1 {
      margin-left: 30px;
    }

    // VIKING BOOKS
    h4 {
      font-size: 23px;
    }

    // COSTOMER MENY
    .footer-part1 {
      a {
        span {
          font-size: 12px;
        }
      }
    }

    // COPYRIGHT
    div {
      h6 {
        font-size: 11px;
      }
    }

    // SNS
    .sns-box {
      display: flex;
      margin-top: 31px;
      margin-left: 50px;
      margin-right: 10px;
      position: unset;
      a {
        font-size: 23px;
        padding: 5px;
      }
    }
  }
`;
