import styled from "styled-components";

const colorPrimary = "#303F9F";

export const Amigos = {
  Container: styled.div`
    .main {
      padding: 30px 40px;
    }
    .pedido {
      width: 100%;
      max-width: 370px;
      .dados {
        border-radius: 7px;
        padding: 20px 25px;
        position: relative;

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
    }
    .pedidos {
      display: flex !important;
      cursor: grabbing;
      .pedido {
        margin: 10px;
      }
    }
    .lista-sugestoes {
      margin-top: 50px;
      padding-bottom: 50px;
      .desc {
        padding: 40px;
      }
      .sugestoes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin: 0 10px;
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