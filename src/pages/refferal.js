import Layout from "@layout/Layout";
import FaqOne from "@components/faq/FaqOne";
import Navbar from "@layout/Header/Navbar";
import SupportOne from "@components/support/SupportOne";
import WorkProcessOne from "@components/workprocess/WorkProcessOne";
import HeroSectionFourth from "@components/hero-section/HeroSectionFourth";
import CryptoFooter from "@layout/Footer/CryptoFooter";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <HeroSectionFourth />
      <WorkProcessOne />
      <FaqOne />
      <SupportOne />
      <CryptoFooter />
    </Layout>
  );
}
