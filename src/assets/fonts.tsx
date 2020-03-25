import { createGlobalStyle } from "styled-components";
import { TypefaceStore } from "../stores";

TypefaceStore.Typefaces.map(val => {
  export default createGlobalStyle`    
        @font-face {
            font-family: 'Font Name';
            src: local('Font Name'), local('FontName'),
            url(${NameOfYourFontWoff2}) format('woff2'),
            url(${NameOfYourFontWoff}) format('woff');
            font-weight: 300;
            font-style: normal;
        }
    `;
});
