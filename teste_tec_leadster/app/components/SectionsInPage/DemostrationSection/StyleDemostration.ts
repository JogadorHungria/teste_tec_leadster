import styled from "styled-components";

export const DemostrationSectionStyle = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: rgb(230, 242, 252);
  padding-top: 50px;
  padding-bottom: 50px;

  .containderSection3 {
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1400px;
    img {
      width: 600px;
      max-width: 45%;
      height: auto;
    }

    > div {
      width: 600px;
      max-width: 45%;
      span {
        font-size: var(--font-title-3);
        display: block;
        font-weight: 500;
        color: var(--color-grey-2);
      }
      span + span {
        font-weight: 600;
        font-size: var(--font-text-3);
        padding-top: 5px;
        padding-bottom: 20px;
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;
        width: 100%;
        gap: 10px;
        border-top: 2px solid rgba(128, 128, 128, 0.479);
        padding-top: 20px;

        > div {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: initial;
          gap: 8px;

          img {
            width: 200px;
            max-width: 150px;
            height: 50px;
          }

          button {
            border-radius: 20px;
            padding: 12px 22px;
            border: none;
            background-color: var(--color-1);
            color: white;
            font-size: var(--font-text-5);

            opacity: 0.9;
          }
          button:hover {
            opacity: 1;
          }
        }
        p {
          align-self: baseline;
          font-size: var(--font-text-5);

          img {
            width: 13px;
            margin-right: 5px;
          }
          img + img {
            margin-left: 5px;
            width: 60px;
          }
        }
      }
    }
  }

  @media (max-width: 700px) {
    .containderSection3 {
      flex-direction: column;
      gap: 50px;
      width: 99%;

      img {
        max-width: 70%;
      }
      div {
        display: flex;
        max-width: 70%;
        flex-direction: column;
        align-items: center;
        margin: 0;
      }
    }
  }
`;
