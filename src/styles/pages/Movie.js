import styled from "styled-components";

export const Movie = {
  Container: styled.div`
    overflow-x: hidden;
  `,
  Main:styled.div`
    /* padding:20px; */
  `,
  Banner:styled.div`
    background:url('/img/back-aranha.jpg');
    background-size: cover;
    background-position:center center;
    height:100vh;
    width: 100vw;

    & > div{
      width:100%;
      height: 100%;
      display: flex;
      align-items:center;

      figure{
        margin:0px;
      }

      img{
        width:300px;
        height:450px;
        object-fit:cover;
      }
    }
  `
};
