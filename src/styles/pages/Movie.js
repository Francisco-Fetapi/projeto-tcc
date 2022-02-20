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
    min-height:100vh;
    width: 100vw;
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .fundo-preto{
      background-color: rgba(0,0,0,.7);
      position:absolute;
    }
    .info{
      height:90%;
      width:90%;
      position:relative;
      z-index:1;
    }
    & > div{
      width:100%;
      height: 100%;
      display: flex;
      align-items:center;

      figure{
        margin:0px;
        height: 100%;
      }

      img{
        width:100%;
        height:100%;
        max-width:300px;
        max-height:450px;
        object-fit:cover;
        border-radius: 8px;
      }
    }
  `,
  Info:styled.div`
    padding:0px 10px;

    .header-info1{
      margin: 8px 0px;
      .MuiChip-root{
        margin-right:8px;
        opacity:.9;

        svg{
          font-size: 14px;
        }
      }
    }
    .header-info2{
      margin-top:5px;
      display:flex;
      align-items:center;
      & > *{
        margin-right:8px;
      }
      .MuiChip-root{
        border-radius:0px;
        border-width:2px;
      }
    }
    .lista-generos{
        .MuiChip-root{
          margin-right: 8px;
          border-width:3px;
          color:#D0D0D0;
          border-color:currentColor;
        }
      }
      .btn-actions{
        .MuiButtonBase-root{
          /* background:rgba(0,0,0,.5) !important; */
        }
      }
      .card-elenco-container{
          display:grid;
          grid-template-columns: repeat(auto-fit,minmax(100px,150px));
          gap:10px;
          .card-elenco{
          padding:8px;
          background:rgba(0,0,0,.7);
          border-radius: 10px;
        }
      }
      
  `,
  Elenco:styled.div`
    padding:20px;
    overflow: auto;
    width:100%;

    .slider-elenco{
      display: flex; 
      overflow: auto;
    }
    .card-ator{
      /* width:100px; */
      flex:1 0 140px;
      margin:10px;
      transition: transform .5s ease-in-out;
      :hover{
        cursor:pointer;
        transform: scale(1.05);
      }
      :active{
        opacity: .8;
      }
      

      img{
        width:100%;
        height:140px;
        border-radius:5%;
      }
    }
  `
};
