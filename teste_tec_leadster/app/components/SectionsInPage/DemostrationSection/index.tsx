import comparativo_img_CTA from "../../../../imagens/comparativo_img_CTA.png";
import selo_RD from "../../../../imagens/selo_RD.png";
import no_card_dark from "../../../../imagens/no-card-dark.webp";
import rating from "../../../../imagens/rating.webp";
import Image from "next/image";
import { DemostrationSectionStyle } from "./StyleDemostration";

export const DemostrationSection = () => {
  return (
    <DemostrationSectionStyle>
      <div className="containderSection3">
        <Image src={comparativo_img_CTA} width={500} height={500} alt="img" />
        <div>
          <span>
            Pronto para triplicar sua
            <br />
            <b>Geração de Leads?</b>
          </span>
          <span>Criação e ativação em 4 minutos</span>
          <div>
            <div>
              <button>VER DEMOSTRAÇÃO</button>
              <Image src={selo_RD} width={200} height={200} alt="img" />
            </div>

            <p>
              <Image
                src={no_card_dark}
                alt="no_card_dark"
                width={10}
                height={10}
              />
              Não é necessário Cartão de Crédito |
              <Image src={rating} alt="rating" /> 4.9/5média de satisfação
            </p>
          </div>
        </div>
      </div>
    </DemostrationSectionStyle>
  );
};
