import { DefaultTheme } from 'react-native-paper'

export const TempleTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: '#99182e',
        accent: 'white'
    }
}

export const DrexelTheme = {
    ...DefaultTheme,
    dark: false,
    colors:{
        ...DefaultTheme.colors,
        primary: '#11294f',
        accent: '#fdc50c'
    }
}