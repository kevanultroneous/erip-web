import React from "react";
import { MdDownload } from "react-icons/md";
import ReactToPrint from "react-to-print";

// order details show pdf generating
function DownloadComponent({ title, content }) {
  const reactToPrintTrigger = React.useCallback(() => {
    return <MdDownload />;
  }, []);

  return (
    <ReactToPrint
      trigger={reactToPrintTrigger}
      content={content}
      documentTitle={title}
    />
  );
}

export default DownloadComponent;
