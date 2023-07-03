import { Footer } from "./components/Footer/intex";
import { Header } from "./components/Header";
import { IntroductionSection } from "./components/SectionsInPage/IntroductionSection";
import { VideoSection } from "./components/SectionsInPage/VideosSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroductionSection />
        <VideoSection />
      </main>
      <Footer />
    </>
  );
}
