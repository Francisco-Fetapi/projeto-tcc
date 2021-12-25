import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    form:not(.input-padrao){
        .MuiFormControl-root{
        width:100%;
    }
    .MuiOutlinedInput-root{
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
`;
