import { styled, css } from "styled-components";

export const HeaderPC = styled.header`
  div {
    div {
      display: flex;
      div {
        width: 50%;

        .viking {
          padding: 20px;
          margin-left: 100px;
          font-size: 40px;
          text-align: left;
          cursor: pointer;
          font-family: "Cookie", cursive;
        }
      }
      .crown {
        position: absolute;
        left: 125px;
        top: 12.5px;
        color: gold;
      }
      .tree {
        position: absolute;
        left: 360px;
        top: 25px;
        font-size: 40px;
        color: green;
      }
      .search-sign-up-in {
        width: 50%;
        justify-content: right;
        align-items: center;
        margin-right: 100px;
        :nth-child(1) {
          font-size: 18.5px;
          cursor: pointer;
        }
        :nth-child(2) {
          margin: 0 10px;
          background-color: yellowgreen;
          color: brown;
          border: 2px solid yellowgreen;
          border-radius: 3px;
          width: 80px;
          padding: 2px;
        }
        :nth-child(3) {
          margin-left: 0;
          margin-right: 10px;
          background-color: green;
          color: white;
          border: 2px solid green;
          border-radius: 3px;
          width: 80px;
          padding: 2px;
        }
      }
    }
  }
`;

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

export const HeaderPCnavbarWrapper = styled.div`
  div.header-pc-nav {
    display: flex;
    justify-content: center;
    background-color: yellowgreen;
    border: 5px solid yellowgreen;
    padding: 5px;

    div {
      width: 13.5%;
      justify-content: center;
    }
    div:nth-child(1) {
      color: red;
    }
    div:last-child {
      width: 16.5%;
    }
  }
`;
