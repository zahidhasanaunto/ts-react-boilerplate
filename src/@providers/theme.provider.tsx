import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgb(133, 16, 91)',
        },
        secondary: {
            main: 'rgb(249, 160, 27)',
        },
    },
});

export const AppThemeProvider = (props: any) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
}