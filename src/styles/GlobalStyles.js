import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    form{
        .MuiFormControl-root{
        width:100%;
    }
    .MuiOutlinedInput-root{
        height:45px;
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
  }
`;
