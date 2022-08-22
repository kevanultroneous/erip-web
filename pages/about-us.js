import AboutHero from "@/components/About-Us/AboutHero";
import GreenEndevour from "@/components/About-Us/GreenEndevour";
import AboutTeam from "@/components/About-Us/AboutTeam";
import AboutFeature from "@/components/About-Us/AboutFeature";
import { Header } from "@/components/common/Header";

function aboutUs() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutTeam />
      <AboutFeature />
      <GreenEndevour />
    </>
  );
}

export default aboutUs;
