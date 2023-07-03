"use client";
import styled from "styled-components";

export const StyledCardVideo = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  transition: 0.3s;
  width: 310px;
  min-width: 310px;
  height: 250px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 1px 1px 20px 1px rgb(231, 230, 230);

  img {
    border-radius: 12px 12px 0 0;
    width: 100%;
    height: 70%;
  }

  .card-overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 70%;
    background-color: var(--color-blue-opacit-1);
    border-radius: 12px 12px 0 0;
    opacity: 0;
    transition: opacity 0.3s;
  }

  :hover .card-overlay {
    opacity: 1;
  }

  :hover {
    color: var(--color-2);
  }

  .card-title {
    position: absolute;
    padding: 15px;
    bottom: 9px;
    left: 0;
    max-height: 30%;
    background-color: white;
    border-radius: 0 0 12px 12px;
    z-index: 2;
  }

  @media (max-width: 350px) {
    min-width: 250px;
    height: 200px;
  }
`;
