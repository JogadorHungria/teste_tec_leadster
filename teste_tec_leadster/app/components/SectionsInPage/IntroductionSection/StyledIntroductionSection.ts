"use client";

import styled from "styled-components";

export const StyledIntroductionSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  flex-direction: column;
  background-color: var(--color-4);
  padding: 120px 20px;

  img {
    position: absolute;
    top: 0px;
    right: -22px;
  }

  .span1 {
    font-size: var(--font-title-4);
    color: var(--color-2);
    border: 2px solid;
    border-radius: 20px 20px 20px 5px;
    padding: 5px 20px;
    margin-bottom: 10px;
    font-weight: 800;
  }

  .span2 {
    font-size: var(--font-title-2);
    color: var(--color-grey-2);
    font-weight: 500;
  }

  .span3 {
    position: relative;
    font-size: var(--font-title-1);
    font-weight: 600;
    border-bottom: 1px solid var(--color-grey-4);
    padding: 0px 0px 10px 0;
    color: var(--color-1);
  }

  .span4 {
    font-size: var(--font-text-4);
    font-weight: 500;
    padding: 20px 5px;
  }

  @media (max-width: 350px) {
    .span3 {
      padding-top: 2px;
    }

    img {
      position: absolute;
      width: 20px;
      height: 15px;
      top: -2px;
      right: 0px;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 20px;
      height: 15px;
      top: 2px;
      right: -9px;
    }
  }
`;
