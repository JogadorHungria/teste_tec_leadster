"use client";
import { createGlobalStyle } from "styled-components";

export const ResetStyled = createGlobalStyle`

html,
body,
div,
span,
applet,
object,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
del,
img,
b,
u,
i,
ol,
ul,
li,
form,
label,
article,
aside,
figure,
footer,
header,
nav,
section {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  text-decoration: none;
}

ol,
ul {
  list-style: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

button,
a,
select {
  cursor: pointer;
}



`;
