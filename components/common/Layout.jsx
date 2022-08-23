import Head from "next/head";

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
      </Head>
      <div>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "ERIP",
  description: "erip products",
  keywords: "erip services",
};
