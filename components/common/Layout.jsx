/* eslint-disable @next/next/no-sync-scripts */
// Set layout for head ,footer & other css & script link
import Head from "next/head";
import { GMAP_API } from "utils/data";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
          key="erip-key-description"
        />

        <meta name="keywords" content={keywords} key="erip-key-keywords" />
        <link rel="erip icon" href="" />
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        {/* <script src="https://checkout.razorpay.com/v1/razorpay.js"></script> */}
      </Head>
      <script
        src={`https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&key=${GMAP_API}&libraries=places`}
      ></script>
      <div>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "ERIP",
  description: "erip products",
  keywords: "erip services",
};
