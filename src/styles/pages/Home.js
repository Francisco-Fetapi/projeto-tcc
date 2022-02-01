import styled from "styled-components";

export const HomeContainer = styled.div``;
export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  position: relative;
  margin-top: -30px;

  .item-usuario {
    /* background: linear-gradient(150deg, #c5f0f2, #0e257f); */
    background: linear-gradient(150deg, #2196f3, #4796f9);
    color: white;
  }

  .item-foto-usuario {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .MuiListItem-root {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .menu-left,
  .menu-right {
    height: 100vh;
    overflow-y: auto;
    position: fixed;
    width: 25%;
    min-width: 200px;
    padding-bottom: 70px;
    box-sizing: border-box;

    .MuiListItemAvatar-root {
      img {
        width: 64px;
        height: 64px;
        margin-right: 10px;
        border-radius: 50%;
      }
    }
    /* .MuiAvatar-root:not(.atvidade-icon, .skeleton) {
      background: #303f9f;
    } */
    .MuiAvatar-root.skeleton {
      background: none;
    }
    .MuiAvatar-root.avatar_series {
      background: linear-gradient(121deg, #2ada2a, #2a5a1a);
    }
    .MuiAvatar-root.avatar_filmes {
      background: linear-gradient(121deg, #d140f2, #0e257f);
    }
    .MuiAvatar-root.avatar_amigos {
      background: linear-gradient(121deg, #c5f0f2, #0e257f);
    }
    .MuiAvatar-root.avatar_videos {
      background: linear-gradient(121deg, cyan, #0e257f);
    }
    .MuiAvatar-root.avatar_atores {
      background: linear-gradient(121deg, #fa1a2a, #0e257f);
    }
    .MuiAvatar-root.avatar_tempo {
      background: linear-gradient(121deg, #ff5af5, #0e257f);
    }
    .lista-atividades {
      .nao-lida {
        background: #ddd !important;
      }
      .MuiListItem-root {
        align-items: flex-start;
      }
      .MuiListItemAvatar-root {
        min-width: auto;
        padding-right: 8px;
      }
      .MuiListItem-gutters:not(.ver_mais_atividades) {
        padding-left: 0px;
      }

      .atividade-texto {
        .MuiTypography-body1 {
          font-size: 14px;
        }
        .MuiTypography-body2 {
          text-align: right;
          font-size: 12px;
        }
      }
      .atvidade-icon {
        background-color: transparent;
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
  .menu-left::-webkit-scrollbar,
  .menu-right::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: #d4d4d4;
  }
  .menu-right::-webkit-scrollbar {
    display: none;
  }
  .menu-right:hover::-webkit-scrollbar {
    display: block;
  }
  .menu-left::-webkit-scrollbar-thumb,
  .menu-right::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }
  .menu-left {
    left: 0;
    right: auto;

    /* .menu-left-item-active{
      background:;
    } */
  }
  .menu-right {
    padding-top: 30px;
    right: 0;
    left: auto;
    .MuiListItem-root {
      padding-top: 9px;
      padding-bottom: 9px;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: block;
      margin-right: 10px;
    }
  }
  .main-content {
    padding: 30px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 545px) {
      & {
        padding: 15px;
      }
    }
    h5 {
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 500;
    }
  }
  @media (max-width: 1140px) {
    & {
      grid-template-columns: 1fr 2fr;
    }
    &:last-child {
      margin-left: 30px;
    }
    .menu-right {
      display: none;
    }
    .menu-left {
      width: 35%;
    }
  }
  @media (max-width: 840px) {
    & {
      grid-template-columns: 1fr;
    }

    .menu-left {
      display: none;
    }
  }
`;
