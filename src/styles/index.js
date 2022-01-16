import styled, { css } from "styled-components";
import Typography from "@material-ui/core/Typography";
import { Link as LinkRrd } from "react-router-dom";

export const Text = styled(Typography)``;
export const ContainerBase = styled.main`
  min-height: 100vh;
`;
export const Link = styled(LinkRrd)`
  color: #4baeb9 !important;
`;
export const HeaderContainer = styled.div`
  background: #fff;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  box-shadow: 1px 1px 1px #ccc;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  svg {
    zoom: 1.2;
  }

  .MuiOutlinedInput-root {
    height: 45px;
    width: 100%;
  }
`;
export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
export const MenuItemContainer = styled.div`
  height: 100%;
  padding: 0px 12px;
  margin: 0px 10px;
  cursor: pointer;

  ${({ active, color }) =>
    active &&
    css`
      border-bottom: 3px solid ${color};
      svg {
        color: ${color};
      }
    `}

  display: flex;
  align-items: center;

  svg {
    font-size: 32px;
  }
`;

export const MenuSecondary = styled.div`
  display: flex;
  align-items: center;
  .foto-user-nome {
    margin-right: 20px;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      display: block;
      margin-right: 5px;
    }
  }
`;

export const ConfirmarEmail = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin: 50px auto;

    .foto-e-form {
      width: 100%;
      max-width: 550px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
    }
    @media (max-width: 520px) {
      .titulo_e_descricao {
        padding: 0px 10px;
      }
      .foto-e-form {
        padding: 0px 20px;
      }
    }
  `,
  Form: styled.div`
    margin-top: 30px;
  `,
};
export const MaisSobreVoce = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin: 50px auto;
    max-width: 720px;

    .form {
      width: 100%;
      max-width: 650px;
      @media (max-width: 675px) {
        & {
          padding: 0 50px;
        }
      }
    }
    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 10px;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
    }
    @media (max-width: 675px) {
      .grid-2,
      .grid-3 {
        grid-template-columns: 1fr;
        row-gap: 35px;
      }
    }
  `,
  Form: styled.div``,
};
