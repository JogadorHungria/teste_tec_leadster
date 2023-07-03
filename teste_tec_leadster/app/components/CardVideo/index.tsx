import img from "../../../imagens/thumbnail.png";
import Image from "next/image";
import { StyledCardVideo } from "./StyledCardVideo";
import { useContext } from "react";
import { ContextGlobal } from "@/app/contexts/GlobalContext";

export const CardVideo = ({ video }: any) => {
  const { setVideoModal } = useContext(ContextGlobal);

  return (
    <StyledCardVideo onClick={() => setVideoModal(video)}>
      <Image src={img} alt="imgvideo" />
      <h3 className="card-title">{video.title}</h3>
      <div className="card-overlay"></div>
    </StyledCardVideo>
  );
};
