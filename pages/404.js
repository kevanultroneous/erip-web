import ErrorHero from "@/components/404ErrorPage/ErrorHero";
import Footer from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import Layout from "@/components/common/Layout";

function ErrorPage() {
  return (
    <>
      <Layout title={"404"}>
        <Header />
        <ErrorHero />
        <Footer />
      </Layout>
    </>
  );
}

export default ErrorPage;
