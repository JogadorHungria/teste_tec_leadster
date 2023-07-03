import Image from "next/image";
import imgText from "../../../../imagens/asset-header.png";
import { IntroductionStyle } from "./StyledIntroduction";

export const Introduction = () => {
  return (
    <IntroductionStyle className="flex ">
      <span className="introductionTitle1">WEBINARS EXLUSIVOS</span>
      <span className="introductionTitle2">Menos Conversinha</span>
      <span className="introductionTitle3">
        Mais Conversão
        <Image className="img" src={imgText} width={52} height={35} alt="img" />
      </span>

      <span className="introductionTitle4">
        Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no
        seu negócio
      </span>
    </IntroductionStyle>
  );
};
