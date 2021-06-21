// // 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";
import colors from "./foundations/colors";
import typography from "./foundations/typography";

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({ 
    styles: styles,
    colors: colors,
    ...typography,
 });

export default theme;
