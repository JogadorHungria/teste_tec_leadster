import img from "../../../imagens/thumbnail.png";
import Image from "next/image";
import { StyledCardVideo } from "./StyledCardVideo";

export const CardVideo = ({ video }: any) => {
  return (
    <StyledCardVideo>
      <Image src={img} alt="imgvideo" />
      <h3 className="card-title">{video.title}</h3>
      <div className="card-overlay"></div>
    </StyledCardVideo>
  );
};
