import Image from "next/image";

import imgText from "../../../../imagens/asset-header.png";
import { StyledIntroductionSection } from "./StyledIntroductionSection";

export const IntroductionSection = () => {
  return (
    <StyledIntroductionSection className="flex ">
      <span className="span1">WEBINARS EXLUSIVOS</span>
      <span className="span2">Menos Conversinha</span>
      <span className="span3">
        Mais Conversão
        <Image className="img" src={imgText} width={52} height={35} alt="img" />
      </span>

      <span className="span4">
        Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no
        seu negócio
      </span>
    </StyledIntroductionSection>
  );
};
