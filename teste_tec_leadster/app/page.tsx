"use client";

import React, { useContext } from "react";
import { Footer } from "./components/Footer/intex";
import { Header } from "./components/Header";
import { IntroductionSection } from "./components/SectionsInPage/IntroductionSection";
import { VideoSection } from "./components/SectionsInPage/VideosSection";
import { ContextGlobal } from "./contexts/GlobalContext";
import { Modal } from "./components/Modal";
import { DemostrationSection } from "./components/SectionsInPage/DemostrationSection";

export default function Home() {
  const { videoModal } = useContext(ContextGlobal);

  return (
    <>
      <Header />
      <main>
        <IntroductionSection />
        <VideoSection />
        <DemostrationSection />
      </main>
      <Footer />
      {videoModal && <Modal />}
    </>
  );
}
