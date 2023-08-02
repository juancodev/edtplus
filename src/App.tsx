import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Modality } from "./components/modality/Modality";
import { TypesOfStudies } from "./components/types-of-studies/TypesOfStudies";
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
        <TypesOfStudies />
        <Modality />
        <ProfileSection />
        <GetStartSection />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
