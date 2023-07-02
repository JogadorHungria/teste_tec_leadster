import Image from "next/image";
import logo from "../../../imagens/logo.png";
import { StyledHeader } from "./HeaderStyles";
// import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <StyledHeader>
      <Image src={logo} height={400} width={400} alt="Logo" />
    </StyledHeader>
  );
};
