import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    > span {
      font-size: var(--fonte-text-1);
      text-align: center;
    }
  }
  .container_links_header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 40px;
    padding-bottom: 40px;
    width: 1200px;
    max-width: 90%;

    > div {
      display: flex;
      flex-direction: column;
      > h3 {
        font-size: var(--font-title-5);
        margin-bottom: 20px;
      }
      > a {
        width: max-content;
        font-size: var(--font-text-5);
        margin: 5px 0;
        color: gray;
        padding-bottom: 3px;
        border-bottom: 1px solid transparent;
      }
      margin-right: 5px;

      > a:hover {
        border-bottom: 1px solid;
      }
      .redes {
        display: flex;
        gap: 10px;
        height: auto;

        > a {
          width: 40px;
          height: 40px;
          background-color: rgb(245, 245, 245);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.8;
          border-radius: 50%;
        }
        > a:hover {
          opacity: 1;
        }
      }

      > span {
        font-size: var(--font-text-5);
        padding-top: 13px;
        > span {
          color: rgb(104, 102, 102);
        }
      }
    }
  }

  .finalit_footer {
    align-items: center;
    width: 100%;
    border-top: 1px solid rgb(240, 240, 240);
    > div {
      padding: 30px 0;
      display: flex;
      gap: 30px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 1200px;

      > span {
        align-items: center;
        font-size: 0.9rem;
        color: gray;
        display: flex;
        justify-content: center;
        width: 100%;
        span {
          color: rgb(33, 115, 238);
          font-size: 0.9rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    .container_links_header {
      div {
        width: 170px;
      }
      flex-wrap: wrap;
      gap: 20px;
      align-items: flex-start;
    }

    .finalit_footer {
      div {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
    }
  }
`;
