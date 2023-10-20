import { createGlobalStyle } from "styled-components";

import CalSans from "../assets/fonts/CalSans-SemiBold.woff2";



export const GlobalStyle = createGlobalStyle`
 
      @font-face{
        font-family: "CalSans";
        src: url(${CalSans}) format("woff2");
      }
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;800&display=swap');

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline: none;
        border:none;
        text-decoration: none;
        list-style:none;
    }

    /* Propiedades personalizadas */
:root{
  --color_1st: #181818;
  --color_2nd: #ffffff;
  --color_3rd: #41dbce;
  --color_4th: #f58888;
  --color_5th: #ff9f1c;
  --border_color: #6e6e6e;
  --secondary_font: "Poppins", sans-serif;
  --primary_font: "CalSans",sans-serif;

}

body{
  font-family: "Poppins";
}

.app-container{
  display:flex;
  background-color: var(--color_1st)
}

button{
  display: block;
  font-family: var(--font_family_2nd);
  outline: none;
  border: none;
  padding: 10px 13px;
  cursor: pointer;

}

`;




