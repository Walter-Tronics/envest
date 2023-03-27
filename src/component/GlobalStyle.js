import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1{
        font-family: 'Montserrat', sans-serif;
        color: #4c3c81;
    }
    
    li {
    list-style-type: none;
    margin: 0 1rem;
    padding: 0 1rem;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    line-height: 29px;
    color: #4c3c81;
    cursor: pointer;
  }
`;

export default GlobalStyle;
