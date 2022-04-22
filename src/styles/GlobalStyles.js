import { createGlobalStyle } from "styled-components";
import { HeaderContainer } from "./";
import { MainContainer } from "./pages/Home";
import { LoginBanner } from "./pages/LoginAndSignUp";
import { NotFound } from "./pages/NotFound";

// const colorPrimary = "#303F9F";
const colorPrimary = "#2196f3";

export const GlobalStyles = createGlobalStyle`
    /* :root,html,body{
        width:100vh;
        height:100vh;
    } */
    img{
        object-fit:cover;
    }
    *{
        &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background: #d4d4d4;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.4);
      }
    }
    body{ 
        &::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.4);
        }
        &::-webkit-scrollbar {
            width: 12px;
            height: 8px;
            background: rgba(200, 200, 200, 0.6);
        }
      &.dark{
        &::-webkit-scrollbar {
            border-radius: 2px;
        }
        &::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.6);
        }
      }
    }

    /* AJUSTES NO TEMA ESCURO */
    .dark{
        ${HeaderContainer}{
            background: #1a1a1a;
            box-shadow: 1px 1px 1px #1c1f1f;
        }
        ${MainContainer}{
            .item-usuario {
                background: linear-gradient(150deg, #0a0a0a 40%, #2c2c2c);
            }
            .lista-atividades {
                
            }
            .MuiAvatar-root{
                svg{
                    color:white !important;
                }
            }
        }
        ${LoginBanner}{
            box-shadow: none;
        }
        .nome_usuario{
            color: #F0F0F0 !important;
        }
        .sugestoes .sugestao figure{
            background:#262626;
        }

        ${NotFound.Container}{
            h1{
                text-shadow: 1px 1px 1px white;
            }
        }
        
    }

    form:not(.input-padrao){
        .MuiFormControl-root{
        width:100%;
    }
    .MuiOutlinedInput-root:not(.MuiOutlinedInput-multiline){
        height:50px;
        width:100%;
    }
    }
    .MuiDialog-scrollBody:after{
        height:0px;
    }
    .MuiDialog-paperWidthSm{
        max-width:520px;
    }
    .MuiBadge-badge {
    background: #e41e3f;
    color: white;
  }
  .IconAndText{
      svg{
          font-size: 35px;
      }
      @media (max-width: 400px) {
        .MuiTypography-h4 {
            font-size: 28px !important;
        }
        svg{
            font-size:30px;
        }
    }
      @media (max-width: 340px) {
        &{
            flex-direction: column;
        }
        .MuiTypography-h4{
            margin-top:15px;
        }
        svg{
            font-size:40px;
        }
    }
  }
  .AddPost{
      p{
          font-weight:600;
          user-select: none;
      }
      .publico{
          cursor:pointer;
          &:active{
              opacity:.8;
          }
          svg{
          color:${colorPrimary};
      }
      
      }
      
      .paper{
          padding:15px 20px;
          padding-bottom:0px;
          border-radius:20px;

          .img-post{
                @media(max-width:415px){
                    display: none;
                }
            }
          
          img{
              width:60px;
              height:60px;
              border-radius:50%;
              margin-right:8px;
              object-fit: cover;
          }
          .MuiFormControl-root{
              width:100%;
              margin-right:40px;
              @media(max-width:350px){
                  margin-right:5px;
              }
          }
          .MuiInputBase-multiline{
              padding:13px 17px;
              width: 100%;
              border-radius:12px;
          }
          #post{
              min-height:60px;
          }
          .button-group{
              .MuiButtonGroup-groupedTextHorizontal:not(:last-child) {
                  border-right: none;
              }
              .MuiButton-text{
                  padding:14px;
              }
              .MuiButton-root{
                  font-size:.75em;
              }
          }
          @media(max-width:515px){
              .buttons-post-videos{
                  display:none;
              }
          }
      }
  }
  textarea::-webkit-scrollbar{
      display: none;
  }
  .post{
      .foto-user{
          width:45px;
          height:45px;
          border-radius:50%;
      }
      .imagem-post{
            width:80%;
            margin-left:auto;
            margin-right:auto;
            img{
                width:100%;
                height:210px;
                object-fit: cover;
            }
        }
      .post-acoes{
          .MuiButtonBase-root{
              border:none;
          }
          .MuiButton-outlined{
            padding:10px 15px;
          }
          .MuiBadge-badge {
            font-size:10px;
            padding:0px 3px;
        }
        .MuiButton-label{
            zoom:.9;
        }
        
      }
  }
  .ver_e_remover{
    .ver{
          color:#81c784 !important;
      }
      .remover{
          color:#f44336 !important;
      }
      .MuiButtonGroup-groupedTextHorizontal{
          border: none;
      }
  }
  .slick-dots {
        li button:before {
          font-size: 14px;
        }
        li.slick-active button:before {
          color: ${colorPrimary};
        }
      }
      .MuiFormHelperText-contained{
          margin-left:0;
      }
      .label-error{
        color:#F44336;
      }
      .MuiDialogContent-root{
        min-width:500px;
        @media(max-width:590px){
            min-width:auto;
        }
      }

      #foto-menu .MuiList-padding {
        padding: 2px;
    }
    #menu-header{
        user-select:none;
        li{
            cursor:pointer;
            :active{
                opacity:.7;
            }
        }
        .MuiPaper-root{
            left:915px;
            min-width:420px;
        }

        
    }
    .fab-button{
        position: fixed;
        z-index: 1;
        bottom: 30px;
        right: 30px;
    }
    .Mui-error{
        .MuiInputAdornment-root{
            color:#F44336;
        }
        svg{
            color:inherit;
        }
    }

    .paper-drawer {
        width: 90%;
        max-width:380px;
        .menu-header-container{
            position:relative;
            z-index:99999999;
        }
      }
      abbr{
          text-decoration:none;
      }

      @media (max-width: 840px) {
      .menuItem-hide-on-tablet {
        display: none !important;
      }
    }
    .menuItem-show-on-tablet {
      display: none;
    }
    @media (max-width: 840px) {
      .menuItem-show-on-tablet {
        display: flex !important;
      }
    }
    @media (max-width: 615px) {
      .menuItem-show-on-tablet {
        display: none !important;
      }
    }
    .MuiPopover-root:not(#menu-header){
        .MuiPaper-root{
            .MuiList-root{
                zoom:.8;
            }
        }
    }
`;
