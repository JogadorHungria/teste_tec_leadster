"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

body{
  
html {
  scroll-behavior: smooth;
}
}

:root {
  
  font-size: 62.5%;
  
  --color-blue-opacit-1:  rgba(45, 173, 252, 0.62);
  --color-4: rgb(230, 242, 252);
  --color-3: rgb(1, 1, 70);
  --color-2: #2c83fb;
  --color-1: #1f76f0;
  
  
  --color-grey-1: #000;
  --color-grey-2: #343A40;
  --color-grey-3: #495057;
  --color-grey-4: #868E96;
  --color-grey-5: #FFFFFF;
 

  --font-title-1:6.5rem;
  --font-title-2: 4rem;
  --font-title-3: 2.4rem;
  --font-title-4: 1.6rem;
  --font-title-5: 1.2rem;


  --font-text-1: 1.8rem;
  --font-text-2: 1.6rem;
  --font-text-3: 1.4rem;
  --font-text-4: 1.2rem;
  --font-text-5: 1rem;
}



@media (max-width: 600px) {

:root{
  
  
  --font-title-1:3.5rem;
  --font-title-2: 2.5rem;
  --font-title-3: 2.4rem;
  --font-title-4: 1.2rem;
  --font-title-5: 1.2rem;


  --font-text-1: 1.8rem;
  --font-text-2: 1.6rem;
  --font-text-3: 1.4rem;
  --font-text-4: 1.2rem;
  --font-text-5: 1rem;

}

  @media (max-width: 350px) {

    :root{
      
      --font-title-1:2.8rem;
      --font-title-2: 2rem;
      --font-title-3: 2.4rem;
      --font-title-4: 1.1rem;
      --font-title-5: 1.2rem;


      --font-text-1: 1.8rem;
      --font-text-2: 1.6rem;
      --font-text-3: 1.4rem;
      --font-text-4: 1.2rem;
      --font-text-5: 1rem;

    }

  }

}


`;
