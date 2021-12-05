import styled, { css } from "styled-components";
import Typography from "@material-ui/core/Typography";

export const Text = styled(Typography)``;
export const ContainerBase = styled.main`
  min-height: 100vh;
`;
export const HeaderContainer = styled.div`
  background: #fff;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;

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
    font-size: 38px;
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
