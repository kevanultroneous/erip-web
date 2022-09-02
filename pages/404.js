import ErrorHero from "@/components/404ErrorPage/ErrorHero";
import Footer from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { useEffect, useState } from "react";
import MobileFooter from "@/components/common/MobileFooter";
import Layout from "@/components/common/Layout";

function ErrorPage() {
  const [mobileView, setMobileView] = useState(true);

  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);
  }, []);
  return (
    <>
      <Layout title={"404"}>
        <Header />
        <ErrorHero />
        {mobileView ? <Footer /> : <MobileFooter />}
      </Layout>
    </>
  );
}

export default ErrorPage;
