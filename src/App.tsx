import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Methodology } from "./components/methodology/Methodology";
import { Modality } from "./components/modality/Modality";
import { Banner } from "./components/banner/Banner";
import { ProfileSection } from "./components/profile/ProfileSection";
import { Layout } from "./layout/Layout";
import { Footer } from "./components/footer/Footer";
import { GetStartSection } from "./components/get-start/GetStartSection";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
        <Methodology />
        <Modality />
        <Banner />
        <ProfileSection />
        <GetStartSection />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
