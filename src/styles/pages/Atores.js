import styled from "styled-components";

export const Atores = {
  Container: styled.div``,
  List:styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(110px,130px));
    gap:50px 20px;
    justify-content: center;
    margin-top: 50px;
  `,
  Item:styled.figure`
    width:100%;
    height:150px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin:0px !important;
    cursor:pointer;
    transition: transform .4s ease-in-out;
    :hover{
      transform: scale(1.05);
    }
    :active{
      opacity:.8;
    }
    img{
      width:100%;
      height:100%;
      border-radius: 50%;
    }
    figcaption{
      margin-top: 10px;
      text-align:center;
    }
  `
};
