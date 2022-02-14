import styled from "styled-components";

export const Usuario = {
  Container: styled.div``,
  FotoDeCapa: styled.div`
    width: 95%;
    height: 300px;
    background: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    position: relative;
    figure {
      position: absolute;
      bottom: 0px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;

      img {
        width: 84px;
        height: 84px;
        border-radius: 50%;
        transform: translateY(65%);
      }
    }
  `,
};
