"use client";
import { useContext } from "react";
import { StyledModal } from "./StyledModal";
import { ContextGlobal } from "@/app/contexts/GlobalContext";
import ReactPlayer from "react-player";

export const Modal = () => {
  const { videoModal, setVideoModal } = useContext(ContextGlobal);

  return (
    <StyledModal>
      <div>
        <div className="headerModal">
          <button
            onClick={() => {
              setVideoModal(false);
            }}
            type="button"
          >
            X
          </button>

          <h3>
            <span>Webinar:</span> {videoModal.title}
          </h3>
        </div>

        <div>
          <ReactPlayer width={"100%"} url={videoModal.link} controls />
        </div>

        <div className="footerModal">
          <h4>Titulo</h4>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            perferendis ex corporis eius, facere rem error sunt voluptate soluta
            ipsa unde quis suscipit officia, id at explicabo quae optio quod.
          </p>

          <h4>Dowloads</h4>
          <hr />
          <div>
            <a className="spanGreen">Spreadsheet.xls</a>
            <a className="spanBlue">Document.doc</a>
            <a className="spanYellow">Presentation.ppt</a>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
