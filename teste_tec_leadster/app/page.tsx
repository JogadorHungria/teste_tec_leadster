import { Footer } from "./components/Footer/intex";
import { Header } from "./components/Header";
import { Introduction } from "./components/SectionsPage/IntroductionSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
      </main>
      <Footer />
    </>
  );
}
