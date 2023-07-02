import Image from "next/image";
import logo from "../../../imagens/logo.png";
import { StyledHeader } from "./HeaderStyles";
// import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <StyledHeader>
      <Image src={logo} alt="Logo" />
    </StyledHeader>
  );
};
