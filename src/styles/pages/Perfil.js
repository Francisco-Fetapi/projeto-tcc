import styled from "styled-components";

export const Perfil = {
  Container: styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    .grid-2 {
      margin-top: 50px;
      display: grid;
      grid-template-columns: auto 1fr;

      .MuiListItem-gutters {
        padding-left: 0px;
      }
    }
    .publicacoes-guardadas {
      width: 100%;
      max-width: 400px;
      .MuiListItem-root {
        flex-direction: column;
      }
    }
    .favoritos {
      .favorito-grid {
        display: grid;
        grid-template-columns: auto 1fr;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        .img {
          width: 90px;
          height: 90px;
        }
        .info {
          margin-left: -20px;
        }
        figure {
          img {
            width: 30px;
            height: 30px;
          }
        }
        h6 {
          padding-left: 30px;
        }
      }
    }
  `,
  Main: styled.div``,
  Info: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
    .foto-nome-bio {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 20px;
      figure {
        position: relative;
        width: 90px;
        height: 90px;
        margin: 5px;
        top: -25px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        figcaption {
          position: absolute;
          bottom: 0;
          right: 0;
          div {
            padding: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #716e6e;
            border-radius: 50%;
            svg {
              color: white;
            }
          }
        }
      }
    }
    .mais_info_perfil {
      .MuiListItemIcon-root {
        min-width: auto;
        margin-right: 10px;
        svg {
          font-size: 30px;
        }
        .home {
          color: #fa2f3d;
          font-size: 37px;
        }
        .thumbUp {
          color: #388e3c;
        }
        .thumbDown {
          color: #df8e3c;
        }
      }
    }
  `,
  Banner: styled.div`
    width: 100%;
    height: 300px;
    background: url("./img/fundo-perfil.png");
    display: flex;
    align-items: flex-end;

    div {
      width: 100%;
      height: 70%;
      background: linear-gradient(
        to top,
        rgba(30, 30, 30, 0.5) 10%,
        transparent
      );
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      div {
        .MuiButton-root {
          margin: 20px;
          background: #fdfdfd;
        }
      }
    }
  `,
  FotosAmigos: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 10px;

    .fotos,
    .amigos {
      padding: 30px;
      padding-bottom: 5px;
      width: 100%;
      border-radius: 10px;
      .fotos-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
        div,
        figure {
          width: 100%;
          height: 130px;
        }
        figure {
          margin-left: 0px;
          zoom: 0.8;
          figcaption p {
            font-weight: bold;
          }
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  `,
};