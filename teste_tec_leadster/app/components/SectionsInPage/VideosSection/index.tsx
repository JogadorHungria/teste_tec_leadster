// import { CardVideo } from "@/app/components/CardVideos";
import data from "../../../../public/Mock/videos.json";

import { StyledVideoSection } from "./StyledVideosSection";

export const VideoSection = ({ modal }: any) => {
  return (
    <StyledVideoSection>
      <nav>
        <ul>
          <li>
            <a
              href="https://leadster.com.br/agencias-parceiras/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=CjwKCAjwkeqkBhAnEiwA5U-uM_fXkpxv7k1uGaKbGZMc5owjR4tOi_2k9-snB_bXf5phrtkXzmM6WhoC-xwQAvD_BwE?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=CjwKCAjwkeqkBhAnEiwA5U-uM_fXkpxv7k1uGaKbGZMc5owjR4tOi_2k9-snB_bXf5phrtkXzmM6WhoC-xwQAvD_BwE"
              target="_black"
            >
              Agências
            </a>
          </li>
          <li>
            <a
              href="https://leadster.com.br/chatbot/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=CjwKCAjwkeqkBhAnEiwA5U-uM_fXkpxv7k1uGaKbGZMc5owjR4tOi_2k9-snB_bXf5phrtkXzmM6WhoC-xwQAvD_BwE?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=CjwKCAjwkeqkBhAnEiwA5U-uM_fXkpxv7k1uGaKbGZMc5owjR4tOi_2k9-snB_bXf5phrtkXzmM6WhoC-xwQAvD_BwE"
              target="_black"
            >
              Chatbot
            </a>
          </li>
          <li>
            <a
              href="https://leadster.com.br/marketing-conversacional/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=CjwKCAjwkeqkBhAnEiwA5U-uM_fXkpxv7k1uGaKbGZMc5owjR4tOi_2k9-snB_bXf5phrtkXzmM6WhoC-xwQAvD_BwE?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=CjwKCAjwkeqkBhAnEiwA5U-uM_fXkpxv7k1uGaKbGZMc5owjR4tOi_2k9-snB_bXf5phrtkXzmM6WhoC-xwQAvD_BwE"
              target="_black"
            >
              Marketing Digital
            </a>
          </li>
          <li>
            <a
              className="geração_de_leads"
              href="https://leadster.com.br/geracao-de-leads/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=CjwKCAjwkeqkBhAnEiwA5U-uM_fXkpxv7k1uGaKbGZMc5owjR4tOi_2k9-snB_bXf5phrtkXzmM6WhoC-xwQAvD_BwE?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=CjwKCAjwkeqkBhAnEiwA5U-uM_fXkpxv7k1uGaKbGZMc5owjR4tOi_2k9-snB_bXf5phrtkXzmM6WhoC-xwQAvD_BwE"
              target="_black"
            >
              Geração de Leads
            </a>
          </li>
          <li>
            <a
              href="https://leadster.com.br/midia-paga/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=CjwKCAjwkeqkBhAnEiwA5U-uM_fXkpxv7k1uGaKbGZMc5owjR4tOi_2k9-snB_bXf5phrtkXzmM6WhoC-xwQAvD_BwE?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=CjwKCAjwkeqkBhAnEiwA5U-uM_fXkpxv7k1uGaKbGZMc5owjR4tOi_2k9-snB_bXf5phrtkXzmM6WhoC-xwQAvD_BwE"
              target="_black"
            >
              Mídia Paga
            </a>
          </li>
        </ul>
        <div>
          <label className="label" htmlFor="ordernar_por">
            Ordernar por
          </label>
          <select name="ordernar_por" id="ordernar_por">
            <option value="data">Data de Publicação</option>
            <option value="data">Ex 2</option>
            <option value="data">Ex 3</option>
            <option value="data">Ex 4</option>
          </select>
        </div>
      </nav>
      <div className="containerVideos">
        <ul>
          <li></li>
        </ul>
      </div>

      <div className="containerButonsSelectPage">
        <span>Página</span>
        <ul>
          <li>
            <button>1</button>
          </li>
        </ul>
      </div>
    </StyledVideoSection>
  );
};
