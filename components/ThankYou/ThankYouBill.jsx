import React, { useEffect, useState } from "react";
import ServiceComponent from "./ServiceComponent";
import { ServiceData } from "utils/serviceData";
import styles from "@/styles/components/ThankYou/ThankYouBill.module.css";

function ThankYouBill() {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      ServiceData.map((service) => service.servicePrice).reduce((a, b) => a + b)
    );
  }, [totalPrice]);

  return (
    <section className={styles.ThankyouBillMainContainer}>
      <div className={styles.orderNumber}>
        <h5>Order: #187</h5>
      </div>
      {ServiceData.map((service, ind) => {
        return (
          <ServiceComponent
            key={ind}
            serviceDesc={service.serviceDesc}
            serviceName={service.serviceName}
            serviceImage={service.serviceImage}
            servicePrice={service.servicePrice}
          />
        );
      })}
      <div className={styles.totalPrice}>
        <h5>Order Summary</h5>
        <hr />
        <div className={styles.totalAmount}>
          <h6>Total</h6>
          <h5>₹ {totalPrice}</h5>
        </div>
        <hr />
      </div>
    </section>
  );
}

export default ThankYouBill;
