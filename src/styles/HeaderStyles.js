import { styled } from "styled-components";

export const HeaderPC = styled.header``;

export const HeaderMobile = styled.header`
  div {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 5px solid yellowgreen;
    div {
      font-family: "Cookie", cursive;
      font-size: 24px;
      cursor: pointer;
      border: none;

      &:first-child {
        font-size: 30px;
        margin-left: 20px;
      }
      &:nth-child(2) {
        font-size: 18px;
      }
      &:last-child {
        margin-right: 20px;
        font-size: 30px;
      }
      .link {
        text-decoration: none;
        color: gray;
      }
      .link .icon {
        color: black;
      }
    }
  }
  .open-links {
    z-index: 100;
    width: 100%;
    height: 60px;
    position: absolute;
    background-color: green;
    border: none;
    transform: translateX(-100%);
    transition: all 0.5s;
    border-bottom: 5px solid brown;
    box-sizing: border-box;
    box {
      margin: auto;
    }
    .link {
      text-decoration: none;
      color: white;
    }
  }
`;
