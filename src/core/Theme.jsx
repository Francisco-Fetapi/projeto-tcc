import React from 'react'
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import CssBaseline from "@material-ui/core/CssBaseline"
import {createMuiTheme} from '@material-ui/core/styles'

export default function Theme({children}) {
    const theme = createMuiTheme({
        props:{
            // backgroundLogin:'#F0F2F5'
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
