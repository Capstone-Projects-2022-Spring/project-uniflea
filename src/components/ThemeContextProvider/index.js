import React, {useState} from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { TempleTheme, DrexelTheme } from '../MasterColorComponent'

export const AppContext = React.createContext(null)

const ThemeContextProvider = ({children}) => {

    const [theme, changeTheme] = useState(TempleTheme)

    return(
        <AppContext.Provider value={{theme: theme, changeTheme}}>
            <PaperProvider theme={theme}>
                {children}
            </PaperProvider>
        </AppContext.Provider>
    )
}

export default ThemeContextProvider