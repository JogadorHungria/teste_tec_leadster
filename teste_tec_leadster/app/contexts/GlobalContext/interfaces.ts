import { ReactNode } from "react";

export interface iChildren {
  children: ReactNode;
}

export interface IGlobalContext {
  videoModal: boolean;
  setVideoModal: any;
}
