import styled from "styled-components";

export const Movie = {
  Container: styled.div`
    overflow: hidden;
  `,
  Main:styled.div`
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
      height:100%;
      width:100%;
      padding:30px;
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
    overflow-x: auto;
    width:100%;
    max-width: 1300px;
    margin:0 auto;

    .slider-elenco{
      display: flex; 
      overflow-x: auto;
      user-select:none;
    }
    .card-ator{
      /* width:100px; */
      flex:1 0 120px;
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
  `,
  Keywords:styled.div`
    background:url('/img/back-aranha.jpg');
    background-size: cover;
    background-position:center center;
    height:300px; 
    display:flex;
    align-items:center;

    padding:0px 40px;

    .MuiChip-root{
        margin-right: 8px;
        margin-bottom: 8px;
      }
  `,
  Galeria:styled.div`
    width:100%;
    max-width: 1300px;
    margin:0 auto;
    padding:20px;    

    .fotos{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(270px,300px));
      height:300px;
      gap:10px;
      margin:20px 0px;

      img{
        width:100%;
        height:100%;
        transition: all .5s ease-in-out;
        cursor:pointer;
        :hover{
          transform: scale(1.05);
        }
      }
    }
  `,
  Lista:styled.div`
    width:100%;
    max-width: 1300px;
    margin:20px auto;
    padding:20px;  

    .filmes{
      display:flex;
      /* grid-template-columns: repeat(auto-fit,minmax(200px,220px)); */
      max-width:1200px;
      overflow-x: auto;
      padding-bottom: 10px;
    }

    .filme{
      flex:0 0 220px;
      height:300px;
      margin-right:10px;
      position:relative;
      cursor:pointer;

      figcaption{
        position:absolute;
        bottom:0;
        right:0;
        left:0;
        padding:12px;
        background:rgba(0,0,0,.5);
        color:#F0F0F0;
        text-align:center;
        font-size: 17px;
        font-weight:bold;
        opacity:0;
        transition:all .5s ease-in-out;
      }
      :hover{
        figcaption{
          opacity:1;
        }
      }

      img{
        width: 100%;
        height:100%;
        border-radius: 15px;
      }
    }
  `,
  Discussoes:styled.div`
    padding:0px 30px; 

  
    
  `
};
