import styled from "styled-components";
import { Link } from "~/styles";

export const Atores = {
  Container: styled.div``,
  List: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 130px));
    gap: 60px 10px;
    justify-content: center;
    margin-top: 50px;
  `,
  Item: styled(Link)`
    width: 100%;
    height: 140px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0px !important;
    cursor: pointer;
    transition: transform 0.4s ease-in-out;
    :hover {
      transform: scale(1.05);
    }
    :active {
      opacity: 0.8;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
    figcaption {
      margin-top: 10px;
      text-align: center;
    }
  `,
};

Atores.Item.defaultProps = {
  nostyle: "false",
};
