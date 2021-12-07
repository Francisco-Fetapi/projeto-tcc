import styled from "styled-components";

export const HomeContainer = styled.div``;
export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin-top: -30px;

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

    .MuiAvatar-root {
      background: #303f9f;
    }
  }
  .menu-left::-webkit-scrollbar,
  .menu-right::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: #d4d4d4;
    display: none;
  }
  .menu-left:hover::-webkit-scrollbar,
  .menu-right:hover::-webkit-scrollbar {
    display: block;
  }
  .menu-left::-webkit-scrollbar-thumb,
  .menu-right::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }
  .menu-left {
  }
  .menu-right {
    padding-top: 30px;
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
    h5 {
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 500;
    }
  }
`;
