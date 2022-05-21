import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";  // style-reset 패키지

console.log(reset)

const GlobalStyles = createGlobalStyle` 
    ${reset}
`;

export default GlobalStyles;