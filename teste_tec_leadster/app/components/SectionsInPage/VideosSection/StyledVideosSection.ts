"use client";
import styled from "styled-components";

export const StyledVideoSection = styled.section`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  height: max-content;
  flex-direction: column;
  gap: 25px;

  nav {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > ul {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      display: flex;
      gap: 10px;
      align-self: start;

      a {
        padding: 8px 18px;
        border-radius: 20px;
        border: 1px solid;
        background: none;
        line-height: 200%;
        color: black;
        font-size: var(--font-text-4);
      }

      a:hover {
        border: 1px solid var(--color-2);
        color: var(--color-2);
      }

      .geração_de_leads {
        opacity: 0.9;
        background-color: var(--color-2);
        color: white;
        border: 1px solid var(--color-2);
      }

      .geração_de_leads:hover {
        opacity: 1;
        color: white;
      }
    }

    > div {
      display: flex;
      align-items: center;
      gap: 10px;
      white-space: nowrap;

      label {
        font-size: var(--font-text-4);
        font-weight: 600;
      }

      select {
        border-radius: 6px;
        padding: 8px;
        font-size: var(--font-text-4);
      }
    }
  }
  .containerVideos {
    min-height: max-content;
    border-bottom: 2px solid rgb(223, 223, 250);
    border-top: 2px solid rgb(223, 223, 250);
    padding: 50px 0;

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 1000px;
      gap: 15px;

      font-size: var(--font-text-3);
    }
  }

  .containerButonsSelectPage {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--font-text-5);

    ul {
      display: flex;

      button {
        border: 1px solid transparent;
        background: none;
        padding: 5px 10px;
        box-sizing: content-box;
      }

      button:hover {
        border: 1px solid var(--color-2);
        border-radius: 6px;
        color: var(--color-2);
        font-weight: 600;
      }
    }
  }

  @media (max-width: 956px) {
    nav {
      box-sizing: border-box;
      padding: 10px;
      flex-direction: column;
      align-items: baseline;
      gap: 30px;
      width: 90vw;
      ul {
        max-width: 90vw;
        gap: 15px;
        padding: 20px 0;
        overflow-y: hidden;
        flex-wrap: nowrap;

        a {
          white-space: nowrap;
        }
      }
    }
  }

  @media (max-width: 680px) {
    .containerVideos {
      > ul {
        display: flex;
        align-items: baseline;
        justify-content: flex-start;
        flex-wrap: nowrap;
        overflow-y: hidden;
        max-width: 90vw;
        padding-bottom: 20px;
      }
    }
  }
`;
