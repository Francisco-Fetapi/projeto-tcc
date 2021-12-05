import styled, { css } from "styled-components";
import { ContainerBase } from "..";
import Paper from "@material-ui/core/Paper";

const paper_radius = 20;

export const Container = styled(ContainerBase)`
  ${({ background }) => css`
    background: ${background};
  `}
  display:flex;
  justify-content: center;
  align-items: center;

  .paper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-width: 950px;
    border-radius: ${paper_radius}px;
    margin: 40px 30px;

    @media (max-width: 900px) {
      & {
        max-width: 520px;
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 600px) {
      & {
        max-width: 450px;
      }
    }
  }
`;
export const LoginBanner = styled.div`
  height: 100vh;
  max-height: 490px;
  width: 100%;
  background: url("./img/a.webp") 100% 100%;
  border-radius: ${paper_radius}px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 8px 2px 80px #c4c4c4;
  @media (max-width: 900px) {
    & {
      display: none;
    }
  }
`;
export const BannerContainer = styled.div`
  width: 75%;
  height: 85%;
  background: #303f9fbb;
  color: #0f0f0f;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;

  * {
    color: rgba(255, 255, 255, 0.9);
  }
  .titulo1 {
    padding-bottom: 3px;
  }
  .titulo1,
  .titulo2,
  .paragrafo,
  .nao_tem_conta {
    font-weight: 300;
  }
  .paragrafo {
    padding-top: 5px;
    font-size: 12px;
    width: 70%;
  }
`;
export const QuadradoBanner = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 120px;
  text-align: center;
  color: white;
  font-weight: 400;
  padding: 10px;
  margin-bottom: 40px;
  text-transform: uppercase;
  /* background:${({ background }) => background || "rgba(0,0,0,.8)"}; */
  background: rgba(255, 255, 255, 0.3);
  position: relative;

  :after {
    content: "";
    width: 30px;
    height: 1px;
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    bottom: -20px;
    left: 0px;
  }
`;
export const ContainerFormLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .btnCriarConta {
    display: none;
  }
  .esqueciAPasse {
    margin-top: 10px;
  }

  form {
    width: 380px;
  }
  @media (max-width: 900px) {
    .btnCriarConta {
      display: flex;
    }
  }
  @media (max-width: 1050px) {
    form {
      margin: auto 20px;
    }
  }
  @media (max-width: 900px) {
    form {
      margin: 20px auto;
    }
  }
  @media (max-width: 600px) {
    form {
      width: 80%;
    }
  }
`;
export const ModalSignUp = styled(Paper)`
  .MuiDialog-paperWidthSm {
    max-width: 400px;
  }
  @media (max-width: 550px) {
    .MuiDialog-paperWidthSm {
      width: 100%;
      max-width: 1000px;
    }
  }
`;
export const ContainerFormSignUp = styled.div`
  display: flex;
  justify-content: center;

  form {
    width: 90%;
  }
  .genero_e_foto {
    display: grid;
    grid-template-columns: 2fr 120px;
    column-gap: 5px;

    .foto {
      display: block;
      position: relative;
      cursor: pointer;
      height: 120px;
      transition: all 0.2s ease-out;
      &:active {
        opacity: 0.8;
      }
      img {
        height: 100%;
      }
      div {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.3);
        padding: 5px;
        opacity: 0;
        transition: all 0.5s ease-in-out;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 100%;
        svg {
          font-size: 30px;
          color: #f0f0f0;
        }
      }
      &:hover {
        transform: scale(1.05);
        div {
          opacity: 1;
        }
      }
    }

    img {
      width: 100%;
      height: 120px;
    }
  }
`;
export const ContainerFormEsqueciAPasse = styled(ContainerFormLogin)`
  form {
    width: auto;
    margin: auto 10px;
  }
`;
