import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 136px);

  span {
    color: #b69121;
    margin-left: 0.3rem;
    font-size: 5rem;
  }

  ul {
    list-style: none;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-evenly;

  .form__div {
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  .form__label {
    font-size: 3rem;
  }

  .form__input {
    margin-left: 1rem;
    border-radius: 5px;
    border: unset;
    padding: 1rem;
    width: 100%;
    background-color: #222;
    outline: none;
    color: #b69121;
    font-size: 3rem;
    text-align: right;
  }

  .real {
    background-color: #b69121;
    color: #fff;
  }

  .form__input::-webkit-inner-spin-button,
  .form__input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 700px) {
     flex-direction: column;

     .form__div {
          flex-direction: column;
     }

     .form__input {
       margin: 0;
     }
  }
`;
