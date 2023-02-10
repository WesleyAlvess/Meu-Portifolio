import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}
body{
    font-family: 'Montserrat', sans-serif;
    background: #ecf1f8;
    color: #333;
    /* Deixa a font mais bonita */
    -webkit-font-smoothing: antialiased !important;
    
    /* display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    align-items: center; */

    width: 100vw;
    height: 100vh;
    margin: 0;
}
`;