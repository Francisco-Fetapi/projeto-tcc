import styled from "styled-components";

// const colorPrimary = "#303F9F";

export const Perfil = {
  Container: styled.div`
    overflow-x: hidden;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    .grid-2 {
      margin-top: 50px;
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 30px;

      @media (max-width: 915px) {
        & {
          grid-template-columns: 1fr;
          width: 100%;
          justify-content: center;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 15px;
          column-gap: 0px;
        }
      }

      .MuiListItem-gutters {
        padding-left: 0px;
      }
    }
    .links_perfil {
      display: none;
      flex-flow: row wrap;
      @media (max-width: 915px) {
        display: flex;
      }
      a {
        display: flex;
        align-items: center;
        margin: 5px 8px !important;
        /* color: inherit !important; */
        text-decoration: none;
        :hover {
          opacity: 0.9;
        }
      }
    }
    .publicacoes-guardadas {
      width: 100%;
      max-width: 400px;
      padding-left: 10px;
      @media (max-width: 915px) {
        &:not(.mobile) {
          display: none;
        }
      }
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
          width: 80px;
          height: 80px;
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
    .favoritos.fixed {
      position: fixed;
      bottom: 0;
      height: 100%;
      overflow-y: auto;
      padding-top: 90px;
      padding-right: 30px;
    }
    .movies {
      width: 100%;
      max-width: 600px;

      @media (max-width: 620px) {
        zoom: 0.8;
      }
      @media (max-width: 475px) {
        width: auto !important;
        max-width: auto !important;
      }
    }
    .lista-movies {
      display: grid !important;
      padding: 0 20px;
      grid-template-columns: repeat(3, 1fr);

      cursor: grabbing;
    }
    .movie {
      /* width: 150px; */
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

    .marcados_pra_mais_tarde_box {
      @media (max-width: 495px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        .lista-movies {
          grid-template-columns: auto auto auto;
          justify-content: center;
          padding: 0px;
        }
      }
      /* @media (max-width: 450px) {
        grid-template-columns: auto auto;
      } */
    }
    .posts-desktop {
      display: block;
      padding: 0 30px;

      @media (max-width: 965px) {
        padding: 0 70px;
      }
    }
    .posts-mobile {
      display: none;
    }
    @media (max-width: 530px) {
      .posts-desktop {
        display: none;
      }
      .posts-mobile {
        display: block;
      }
    }
    @media (max-width: 450px) {
      .posts-mobile {
        zoom: 0.85;
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
    @media (max-width: 890px) {
      & {
        grid-template-columns: 1fr;
        row-gap: 10px;
      }
    }
    @media (max-width: 440px) {
      width: 100%;
      padding: 0 10px;
    }
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

      .alterar-email-box {
        display: flex;
        align-items: center;

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
        @media (max-width: 440px) {
          display: block;
          .alterar_email {
            margin-left: 0px;
            justify-content: center;
          }
        }
      }
    }
    .mais_info_perfil {
      .MuiListItemIcon-root {
        min-width: auto;
        margin-right: 10px;
        svg {
          font-size: 20px;
        }
        .home {
          zoom: 1.2;
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
    background-position: center center;
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
    min-height: 400px;

    @media (max-width: 990px) {
      & {
        grid-template-columns: 1fr;
        max-width: 600px;
        margin: 0 auto;
        justify-content: center;
      }
      .fotos,
      .amigos {
        min-height: 300px;
        padding-bottom: 40px !important;
      }
    }

    .progress {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
    }
    .paginate {
      position: absolute;
      bottom: 10px;
      right: 0;
      left: 0;
    }

    .amigos {
      figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
      }
      img.img-amigo {
        width: 100px !important;
        height: 100px !important;
        border-radius: 50%;
        margin-bottom: 8px;
      }
    }

    .fotos,
    .amigos {
      padding: 30px;
      padding-bottom: 5px;
      width: 100%;
      min-width: 460px;
      border-radius: 10px;
      position: relative;

      @media (max-width: 630px) {
        & {
          min-width: auto;
        }
      }

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
          zoom: 0.75;
          figcaption p {
            font-weight: bold;
          }
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .galeria {
        figure {
          width: 100%;
          height: 130px;
          zoom: 1;
          position: relative;
          margin: 0;
          figcaption {
            opacity: 0;
          }
          img {
            width: 100%;
            height: 100%;
          }

          .fundo-preto-1 {
            height: 0;
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.5) 40%,
              transparent
            );
            display: flex;
            align-items: center;
            justify-content: center;
            bottom: 0px;
            right: 0;
            left: 0;
            color: white;
            font-weight: bolder;
            font-size: 12px;
            overflow: hidden;
          }
          .fundo-preto-1,
          .fundo-preto-2 {
            transition: all 0.5s ease-in-out;
            cursor: default;
            user-select: none;
            position: absolute;
            opacity: 0;
          }
          .fundo-preto-1.preview {
            opacity: 1;
            height: 40%;
          }
          :hover {
            .fundo-preto-1 {
              opacity: 1;
              height: 40%;
            }
            .fundo-preto-2 {
              opacity: 1;
              width: 30%;
            }
            figcaption {
              opacity: 1;
            }
          }
          .fundo-preto-2 {
            background: linear-gradient(
              to left,
              rgba(0, 0, 0, 0.4) 50%,
              transparent
            );
            width: 0;
            top: 0;
            bottom: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            svg {
              display: block;
              margin-top: 10px;
              cursor: pointer;
              zoom: 0.85;
              color: #f0f0f0;
              :active {
                opacity: 0.8;
              }
            }
          }
        }
      }
      .msg-sem-foto {
        svg.foto {
          font-size: 80px;
          cursor: pointer;
          :active {
            opacity: 0.8;
          }
        }
      }
      .msg-sem-amigos {
        @media (max-width: 990px) {
          transform: translateY(30px);
        }
        img {
          width: 300px;
          height: 250px;
        }
      }
    }
    .amigos {
      .fotos-grid {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 0px;
        margin: 0px;

        @media (max-width: 480px) {
          grid-template-columns: 1fr 1fr 1fr;
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
