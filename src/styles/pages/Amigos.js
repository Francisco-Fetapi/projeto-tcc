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
        /* background-color: #303f9fcc; */
        /* color: white; */
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
      .btn-acoes {
        .MuiButton-root {
          color: white;
        }
        .aceitar {
          background: #388e3c;
        }
        .rejeitar {
          background: #fa2f3d;
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
  `,
};
