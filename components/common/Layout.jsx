/* eslint-disable @next/next/no-sync-scripts */
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
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
        <meta name="keywords" content={keywords} key="erip-key-keywords" />
        <link rel="erip icon" href="" />
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
