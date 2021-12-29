import styled from "styled-components";

export const Perfil = {
  Container: styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  `,
  Main: styled.div``,
  Banner: styled.div`
    width: 100%;
    height: 300px;
    background: url("./img/fundo-perfil.png");
    display: flex;
    align-items: flex-end;

    div {
      width: 100%;
      height: 70%;
      background: linear-gradient(
        to top,
        rgba(30, 30, 30, 0.5) 10%,
        transparent
      );
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      div {
        .MuiButton-root {
          margin: 20px;
          background: #fdfdfd;
        }
      }
    }
  `,
};
