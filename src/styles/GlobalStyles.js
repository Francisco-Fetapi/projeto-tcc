import { createGlobalStyle } from "styled-components";

const colorPrimary = "#303F9F";

export const GlobalStyles = createGlobalStyle`
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
          img{
              width:45px;
              height:45px;
              border-radius:50%;
              margin-right:8px;
          }
          .MuiFormControl-root{
              width:100%;
              margin-right:40px;
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
      }
  }
  textarea::-webkit-scrollbar{
      display: none;
  }
`;
