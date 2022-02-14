import styled from "styled-components";

export const Usuario = {
  Container: styled.div``,
  FotoDeCapa: styled.div`
    width: 100%;
    height: 300px;
    background: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  `,
};
