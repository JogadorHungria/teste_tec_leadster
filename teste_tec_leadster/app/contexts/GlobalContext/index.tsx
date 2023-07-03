"use client";

import React, { createContext, useState } from "react";
import { IGlobalContext, iChildren } from "./interfaces";

export const ContextGlobal = createContext({} as IGlobalContext);

export const ContextGlobalProvider = ({ children }: iChildren) => {
  const [videoModal, setVideoModal] = useState(false);

  return (
    <ContextGlobal.Provider value={{ videoModal, setVideoModal }}>
      {children}
    </ContextGlobal.Provider>
  );
};
