import { Header } from "@/components/common/Header";
import IssueComponent from "@/components/IssuePage/IssueComponent";
import { issueData } from "utils/issueData";
import { Col, Row } from "react-bootstrap";
import IssueTotalBill from "@/components/IssuePage/IssueTotalBill";
import SelectDeviceHero from "@/components/SearchByModel/SelectDeviceHero";
import axios from "axios";
import WhyErip from "@/components/common/WhyErip";
import Testimonials from "@/components/common/Testimonials";
import { TestimonialData } from "utils/data";
import Footer from "@/components/common/Footer";
import styles from "@/styles/components/IssuePage/issuepage.module.css";
import Layout from "@/components/common/Layout";

function IssuePage({ data }) {
  return (
    <>
      <Layout title={"Issue Page"}>
        <Header />
        <SelectDeviceHero
          headClass={styles.selectDeviceHero}
          modelSection={styles.selectDeviceSection}
        />
        <WhyErip />
        <Testimonials data={data.hometestimonial} />
        <Footer />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  let home_testimonial = await axios
    .get(`http://43.204.87.153/api/v1/cms/testimonials`, {
      params: {
        page: "home",
      },
    })
    .then((res) => {
      console.log(res);
      res.data;
    })
    .catch((e) => console.log("testimonial error" + e));
  return {
    props: {
      data: {
        hometestimonial: home_testimonial ? home_testimonial : TestimonialData,
      },
    },
  };
}

export default IssuePage;
