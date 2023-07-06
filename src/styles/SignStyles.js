import { styled } from "styled-components";

export const SignUpMain = styled.main`
  display: flex;
  justify-content: center;
`;
export const SignForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 410px;
  margin-top: 50px;

  input {
    border: none;
    border-bottom: 2px solid lightgray;
    padding: 10px;
    margin-bottom: 12px;
    transition: all 0.4s;
    &::placeholder {
      font-size: 14px;
    }
    &:hover {
      transition: all 1s;
      border-bottom: 2px solid yellowgreen;
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid green;
    }
  }

  button.submit {
    margin-top: 5px;
    margin-bottom: 20px;
    padding: 7.5px;
    border-radius: 5px;
    border: none;
    background-color: green;
    color: white;
  }
  button.google {
    margin-top: 20px;
    margin-bottom: 5px;
    padding: 7.5px;
    border-radius: 5px;
    border: none;
    background-color: rgb(234, 67, 53);
    color: white;
    .google-icon {
      margin-right: 5px;
      font-size: 16.8px;
    }
  }
  button.facebook {
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 7.5px;
    border-radius: 5px;
    border: none;

    background-color: #4267b2;
    color: white;

    .facebook-icon {
      margin-right: 5px;
      font-size: 20px;
    }
  }
  button.github {
    margin-top: 5px;
    padding: 7.5px;
    border-radius: 5px;
    border: none;

    background-color: rgb(39, 37, 37);
    color: white;

    .github-icon {
      margin-right: 5px;
      font-size: 20px;
    }
  }

  .account-text {
    margin-top: 20px;

    .have-or-not-account {
      font-weight: 400;
      cursor: pointer;
    }
    .sign-in-up-arrow {
      margin-left: 5px;
    }
  }
`;
