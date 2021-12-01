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
`;
