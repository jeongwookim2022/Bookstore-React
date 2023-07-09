import { styled } from "styled-components";

export const MainContainer = styled.div`
  height: 360px;

  .documents {
    display: grid;
    justify-content: center;

    @media (max-width: 800px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 690px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 472px) {
      grid-template-columns: repeat(2, 1fr);
    }
    grid-template-columns: repeat(5, 1fr);
  }
  .box {
    margin: 10px;
    padding: 10px 5px;
    box-shadow: rgba(0, 0, 0, 0.08) 1px 1px 2px, rgba(0, 0, 0, 0.1) 0px 0px 2px;
    border: 1px solid rgba(70, 70, 70, 0.11);
    cursor: pointer;
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  input[type="text"] {
    padding: 2px;
    margin: 10px 5px 0px 0px;
  }

  // ////////////////////////

  form {
    margin-top: 60px;
    button {
      border-radius: 10px;
      padding: 6px;
      color: white;
      border: 1px solid green;
      background-color: green;
      margin-left: -9px;
    }
    input {
      width: 300px;
      padding: 3px;
    }
  }
  .accuracy-latest-btns {
    margin-top: 11px;
    button {
      border-radius: 3px;
      padding: 3px 9px 3px 9px;
      &:first-child {
        margin-right: 12px;

        color: white;
        background-color: brown;
        border: 1px solid brown;
      }
      &:last-child {
        margin-left: 10px;

        border: 1px solid brown;
        color: brown;
        background-color: white;
      }
    }
  }

  .next-prev-buttons {
    button {
      background-color: yellowgreen;
      color: white;
      border: 2px solid yellowgreen;
      padding: 3px;
      padding-left: 7px;
      padding-right: 7px;
      border-radius: 5px;

      margin-top: 28px;
      margin-bottom: -10px;

      cursor: pointer;
    }
  }
`;
