import styled from "styled-components";

// const colorPrimary = "#303F9F";

export const Amigos = {
  Container: styled.div`
    .main {
      padding: 30px 40px;

      @media (max-width: 600px) {
        & {
          padding: 30px 15px;
        }
      }
      @media (max-width: 840px) {
        & {
          transform: translateX(-3%);
        }
      }
    }
    .slider-pedidos {
      @media (max-width: 570px) {
        zoom: 0.9;
      }
      @media (max-width: 510px) {
        zoom: 1;
      }
    }
    .pedido {
      width: 100%;
      max-width: 370px;
      min-width: 250px;
      .dados {
        border-radius: 7px;
        padding: 20px 25px;
        position: relative;
        margin: 6px;
        height: 200px;
        position: relative;

        .loading {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.1);
        }

        figure {
          position: absolute;
          bottom: -45px;
          right: 0px;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
        }
      }
    }
    .slider-pedidos {
      width: 100%;
      max-width: 500px;
      div {
        height: 100%;
      }
      .slick-list {
        width: 100% !important;
      }
      @media (max-width: 630px) {
        display: none !important;
      }
    }
    .slider-mobile-container {
      margin-top: 20px;
      width: 90%;
      max-width: 480px;
      overflow-x: hidden;
      display: flex;
    }
    .slider-pedidos-mobile {
      display: none;
      width: 100%;
      max-width: 490px;
      overflow-x: auto;
      padding-bottom: 10px;
      &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background: #d4d4d4;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.4);
      }
      @media (max-width: 630px) {
        display: flex;
      }
      @media (max-width: 560px) {
        flex-direction: column;
        height: 320px;
        padding-right: 30px;
        .pedido {
          margin-bottom: 30px;
        }
      }
    }
    .pedidos {
      display: flex !important;
      cursor: grabbing;
      .pedido {
        margin: 10px;
      }
      @media (max-width: 500px) {
        .slick-slide {
          width: 300px !important;
        }
      }
    }
    .lista-sugestoes {
      /* margin-top: 50px; */
      padding-bottom: 10px;
      .desc {
        padding: 40px;
      }
      .sugestoes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin: 0 10px;

        @media (max-width: 535px) {
          grid-template-columns: 1fr;
          margin: auto;
          justify-content: center;
          padding: 0 10px;
          .sugestao {
            margin: auto !important;
          }
        }
      }
      .sugestao {
        width: 100%;
        max-width: 320px;
        border-radius: 20px;
        figure {
          display: flex;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          width: 100%;
          justify-content: center;
          align-items: flex-end;
          background-color: #dfdfdf;
          height: 70px;
          margin: 0px;
          img {
            width: 60px;
            height: 60px;
            margin-bottom: -30px;
            border-radius: 50%;
          }
        }
        .info {
          min-height: 150px;
          width: 100%;
          padding-bottom: 20px;
        }
      }
    }
  `,
};
