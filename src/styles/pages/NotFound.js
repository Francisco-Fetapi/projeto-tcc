import styled from "styled-components";

export const NotFound = {
  Container: styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: center;
    align-items: center;
    padding: 70px 50px;

    h1 {
      font-family: cursive;
      zoom: 1.8;
      text-shadow: 2px 2px 2px black;
    }
    @media (max-width: 900px) {
      & {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 550px) {
      & {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  `,
};
