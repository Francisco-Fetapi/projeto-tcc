import styled from "styled-components";

// const colorPrimary = "#303F9F";

export const Perfil = {
  Container: styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    .grid-2 {
      margin-top: 50px;
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 30px;

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
    .movies {
      width: 100%;
      max-width: 600px;
    }
    .lista-movies {
      display: flex !important;
      flex-flow: row wrap;
      cursor: grabbing;
    }
    .movie {
      width: 150px;
      height: 190px;
      position: relative;
      margin: 5px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
      }
      figcaption {
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 5px;
        cursor: pointer;
        transition: all 0.3s linear;

        :hover {
          background: rgba(0, 0, 0, 0.8);
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
        .left {
          position: absolute;
          bottom: 0;
          left: 0;
        }
        .right {
          position: absolute;
          bottom: 0;
          right: 0;
        }
        figcaption {
          position: absolute;
          bottom: 0;
          right: 0;
        }
        label,
        .label {
          display: block;
          padding: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #716e6e;
          border-radius: 50%;
          cursor: pointer;
          :hover {
            opacity: 0.9;
          }
          :active {
            opacity: 0.5;
          }
          svg {
            color: white;
            font-size: 15px;
          }
        }
      }
      .alterar_email {
        cursor: pointer;
        user-select: none;
        :hover {
          opacity: 0.8;
        }
        :active {
          opacity: 0.5;
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
    background: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: cover;
    /* background: ; */
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
  InfoPerfil: styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 12px;
    .dado-grid-1 {
      display: grid;
      grid-template-columns: 1fr;
    }
    .dado-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .dado-grid-2,
    .dado-grid-1 {
      p:first-child {
        font-weight: bold;
      }
      p:last-child {
        font-style: italic;
      }
    }
  `,
};
