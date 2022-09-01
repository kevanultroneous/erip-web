import AboutHero from "@/components/About-Us/AboutHero";
import GreenEndevour from "@/components/About-Us/GreenEndevour";
import AboutTeam from "@/components/About-Us/AboutTeam";
import AboutFeature from "@/components/About-Us/AboutFeature";
import { Header } from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Layout from "@/components/common/Layout";

function aboutUs() {
  return (
    <>
      <Layout title={"About Us"}>
        <Header />
        <AboutHero />
        <AboutTeam />
        <AboutFeature />
        <GreenEndevour />
        <Footer />
      </Layout>
    </>
  );
}

export default aboutUs;
