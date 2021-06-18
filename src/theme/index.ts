// // 1. Import the extendTheme function
import { extendTheme, ThemeConfig } from "@chakra-ui/react"

import styles from './styles'
import colors from './foundations/colors'
import typography from "./foundations/typography"

const config: ThemeConfig = {
    initialColorMode: "light"
}

// // 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
    ...styles,
    config,
    ...colors,
    typography
})

export default theme