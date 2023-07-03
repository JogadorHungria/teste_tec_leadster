import { Footer } from "./components/Footer/intex";
import { Header } from "./components/Header";
import { IntroductionSection } from "./components/SectionsInPage/IntroductionSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroductionSection />
      </main>
      <Footer />
    </>
  );
}
