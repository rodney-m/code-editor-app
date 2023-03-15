import { PropsWithChildren } from 'react'
import {ThemeProvider, createTheme } from '@mui/material/styles'
import { commonColors, darkColors, lightColors } from './colors';

declare module '@mui/material/styles' {
    interface Theme {
      background: string;
      font: string;
      commonColors : {[key:string] : string};
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        background: string;
        font: string;
        commonColors : {[key:string] : string};
    }
  }

const CustomThemeProvider = (props : PropsWithChildren<{}>) => {
    const darkMode = false;
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: commonColors.primary
            },
        },
        background : darkMode ? darkColors.background : lightColors.background,
        font: darkMode ? darkColors.font : lightColors.font,
        commonColors,
    })
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;

 
  
}
export default CustomThemeProvider