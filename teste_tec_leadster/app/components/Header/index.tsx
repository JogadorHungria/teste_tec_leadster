import Image from "next/image";
import logo from "../../../imagens/logo.png";
import { StyledHeader } from "./HeaderStyles";

export const Header = () => {
  return (
    <StyledHeader>
      <Image src={logo} alt="Logo" />
    </StyledHeader>
  );
};
