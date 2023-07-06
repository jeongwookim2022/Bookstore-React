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
    margin: 10px 5px 10px 0px;
  }

  button {
    background-color: rgb(88, 61, 188);
    color: white;
    border: none;
    padding: 5px;
    border-radius: 10px;
  }

  button:disabled {
    background-color: gray;
  }

  // ////////////////////////

  form {
    margin-top: 60px;
    margin-bottom: 40px;
    button {
      border-radius: 10px;
      padding: 7px;
      background-color: green;
    }
    input {
      width: 300px;
      padding: 3px;
    }
  }

  .next-prev-buttons {
    button {
      background-color: brown;
      padding: 3px;
      padding-left: 7px;
      padding-right: 7px;
      border-radius: 5px;

      margin-top: 28px;
      margin-bottom: -10px;
    }
  }
`;
