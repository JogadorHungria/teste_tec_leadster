"use client";
import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-blue-opacit-1);

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 500px;
    max-width: 90%;
    box-shadow: 0px 0px 12px 0px grey;
    background-color: white;
    border-radius: 12px;
    border-top: 3px solid var(--color-1);

    h3 {
      font-size: var(--font-title-4);
      span {
        color: var(--color-1);
      }
      width: 300px;
      max-width: 90%;
      text-align: center;
    }

    button {
      position: absolute;
      right: 10px;
      top: 10px;
      width: max-content;
      background: none;
      border: none;
      font-size: var(--font-text-1);
    }

    button:hover {
      color: var(--color-1);
    }

    .headerModal {
      box-sizing: border-box;
      width: 100%;
      height: 100px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .footerModal {
      box-sizing: border-box;
      padding: 20px;
      padding-top: 0;

      h4 {
        margin-top: 20px;
      }

      div {
        hr {
          color: red;
        }
        display: flex;
        gap: 10px;

        .spanYellow,
        .spanBlue,
        .spanGreen {
          padding: 5px;
          border-radius: 6px;
        }

        .spanGreen {
          background-color: green;
          color: white;
        }
        .spanBlue {
          background-color: blue;
          color: white;
        }
        .spanYellow {
          background-color: yellow;
          color: white;
        }
      }
    }
  }
`;
