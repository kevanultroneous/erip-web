import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/Popups/PaymentOption.module.css";
import { useCallback, useEffect, useState } from "react";
import PrimaryButton from "../common/PrimaryButton";
import { BsCheckCircleFill, BsChevronRight } from "react-icons/bs";
import axios from "axios";
import Layout from "../common/Layout";
import useRazorpay from "react-razorpay";
export default function PaymentOption({ amount }) {
  const paymentOption = [
    {
      option: 1,
      name: "QR Code",
      img: "/assets/images/paymentoption/qr-code.png",
      selectedimg: "/assets/images/selectedoptions/s-qr.png",
    },
    {
      option: 2,
      name: "Credit/Debit Cards",
      img: "/assets/images/paymentoption/card-payment.png",
      selectedimg: "/assets/images/selectedoptions/s-card.png",
    },
    {
      option: 3,
      name: "UPI Payment",
      img: "/assets/images/paymentoption/upi-payment.png",
      selectedimg: "/assets/images/selectedoptions/s-upi-payment.png",
    },
    {
      option: 4,
      name: "Net Banking",
      img: "/assets/images/paymentoption/net-bank.png",
      selectedimg: "/assets/images/selectedoptions/s-netbank.png",
    },
    {
      option: 5,
      name: "Wallets",
      img: "/assets/images/paymentoption/wallets.png",
      selectedimg: "/assets/images/selectedoptions/s-wallets.png",
    },
    {
      option: 6,
      name: "Pay Later",
      img: "/assets/images/paymentoption/pay-later.png",
      selectedimg: "/assets/images/selectedoptions/s-paylater.png",
    },
  ];

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectWallet, setSelectWallet] = useState(null);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
  }, []);

  const [datas, setDatas] = useState(0);

  const Razorpay = useRazorpay();

  const idgeneration = () => {
    axios
      .post("/api/payment", { money: amount })
      .then((r) => setDatas(r.data))
      .catch((e) => console.log(e));
    checkingId();
  };
  const checkingId = () => {
    // alert("checking id");
    if (datas != null || datas != undefined || datas != {}) {
      handlePayment();
    }
  };
  const handlePayment = useCallback(() => {
    const options = {
      key: "rzp_test_edc0iutgef4r18",
      amount: amount * 100,
      currency: "INR",
      name: "ERIP",
      description: "",
      image: "https://example.com/your_logo",
      // callback_url: "http://192.168.1.28:3000/razortest",
      // redirect: true,
      order_id: datas.id,
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    let rzp = new Razorpay(options);
    if (datas.id != "" || datas.id) {
      console.log(datas.id);
      // alert(datas.id);
      rzp.open();
    }
  }, [Razorpay]);

  return (
    <Layout>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12}>
          <p className={styles.PaymentMainHeading}>Payment Options</p>
          <hr className={styles.Hr} />
        </Col>
        <Col xs={12} md={12} lg={4} xl={4}>
          <div
            className={styles.PaymentOptionWrraper}
            //   style={
            //     mobileView && selectedPayment == null ? null : { display: "none" }
            //   }
          >
            {paymentOption.map((v, i) => (
              <div
                key={i}
                className={`${styles.PaymentOptionCover} ${
                  selectedPayment == i && styles.SelectedOption
                } `}
                onClick={() => {
                  i == 5 ? idgeneration() : setSelectedPayment(i);
                }}
              >
                <div className={styles.PaymentImgWrraper}>
                  <Image
                    src={
                      mobileView
                        ? v.selectedimg
                        : selectedPayment == i
                        ? v.selectedimg
                        : v.img
                    }
                    alt="payment"
                  />
                </div>
                <p
                  className={`${styles.PaymentName} ${
                    selectedPayment == i && styles.SelectedPaymentName
                  }`}
                >
                  {v.name}
                </p>
                {mobileView && (
                  <div className={styles.MobileRadio}>
                    <Image src="/assets/images/b-radio.png" alt="radio" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Col>

        <Col xs={12} md={12} lg={8} xl={8}>
          {selectedPayment == 0 && (
            <Row>
              {mobileView && <b className={styles.MobSubText}>QR Code</b>}
              <Col
                xs={12}
                md={12}
                lg={4}
                xl={4}
                className={styles.PaymentMobCol}
              >
                <Image src="/assets/images/qr-imgs.png" alt="qr-img" />
              </Col>
              <Col xs={12} md={12} lg={8} xl={8}>
                <p className={styles.QrText}>
                  {mobileView
                    ? "Scan the QR using any UPI app on your phone"
                    : "Please point your phone to the screen to capture this QR codeand make payment"}
                </p>
              </Col>
            </Row>
          )}
          {selectedPayment == 1 &&
            (mobileView ? (
              <>
                <Row>
                  {mobileView && (
                    <b className={styles.MobSubText}>Credit/Debit Cards</b>
                  )}
                  <Col
                    xs={12}
                    md={8}
                    lg={8}
                    xl={8}
                    className={styles.InputWrraperCol}
                  >
                    <p className={styles.InputLabel}>Card number</p>
                    <div className={styles.InputWrraper}>
                      <input
                        type={"number"}
                        placeholder="0000 0000 0000 0000"
                      />
                      <Image
                        src="/assets/images/m-card.png"
                        alt="m-card"
                        height={27}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    md={8}
                    lg={8}
                    xl={8}
                    className={styles.InputWrraperCol}
                  >
                    <p className={styles.InputLabel}>Cardholder’s name</p>
                    <div className={styles.InputWrraper}>
                      <input type="text" placeholder="Name" />
                    </div>
                  </Col>
                </Row>
                <Row className={styles.MobSpecRow}>
                  <Col
                    xs={6}
                    md={4}
                    lg={4}
                    xl={4}
                    className={styles.InputWrraperCol}
                  >
                    <p className={styles.InputLabel}>Expiry date</p>
                    <div className={styles.InputWrraper}>
                      <input type="text" placeholder="MM / YYYY" />
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={4}
                    xl={4}
                    className={styles.InputWrraperCol}
                  >
                    <p className={styles.InputLabel}>CVV</p>
                    <div className={styles.InputWrraper}>
                      <input type={"number"} placeholder="3 digits" />
                    </div>
                  </Col>
                </Row>
              </>
            ) : (
              <>
                <Row>
                  <Col
                    xs={12}
                    md={8}
                    lg={8}
                    xl={8}
                    className={styles.InputWrraperCol}
                  >
                    <p className={styles.InputLabel}>Card number</p>
                    <div className={styles.InputWrraper}>
                      <input
                        type={"number"}
                        placeholder="0000 0000 0000 0000"
                      />
                      <Image
                        src="/assets/images/m-card.png"
                        alt="m-card"
                        height={27}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={4}
                    xl={4}
                    className={styles.InputWrraperCol}
                  >
                    <p className={styles.InputLabel}>Expiry date</p>
                    <div className={styles.InputWrraper}>
                      <input type="text" placeholder="MM / YYYY" />
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    md={8}
                    lg={8}
                    xl={8}
                    className={styles.InputWrraperCol}
                  >
                    <p className={styles.InputLabel}>Cardholder’s name</p>
                    <div className={styles.InputWrraper}>
                      <input type="text" placeholder="Name" />
                    </div>
                  </Col>

                  <Col
                    xs={6}
                    md={4}
                    lg={4}
                    xl={4}
                    className={styles.InputWrraperCol}
                  >
                    <p className={styles.InputLabel}>CVV</p>
                    <div className={styles.InputWrraper}>
                      <input type={"number"} placeholder="3 digits" />
                    </div>
                  </Col>
                </Row>
              </>
            ))}
          {selectedPayment == 2 && (
            <Row className={styles.Upi}>
              <h4 className={styles.UpiHeading}>UPI ID</h4>
              <p className={styles.UpisubTitle}>
                Google Pay, PhonePe, BHIM & more
              </p>
              <Col
                xs={12}
                md={12}
                lg={12}
                xl={12}
                className={styles.InputWrraperCol}
              >
                <div className={styles.InputWrraper}>
                  <input type="text" placeholder="Enter UPI ID here" />
                  <label className={styles.VeryfyText}>VERIFY</label>
                </div>
              </Col>
            </Row>
          )}
          {selectedPayment == 3 && (
            <Row className={styles.NetBanking}>
              {mobileView && <b className={styles.MobSubText}>Net Banking</b>}
              {[
                {
                  img: "/assets/images/bank-hdfc.png",
                  name: "HDFC",
                },
                {
                  img: "/assets/images/bank-icici.png",
                  name: "ICICI",
                },
                {
                  img: "/assets/images/bank-axis.png",
                  name: "Axis",
                },
                {
                  img: "/assets/images/bank-kotak.png",
                  name: "Kotak",
                },
              ].map((v, i) => (
                <Col xs={6} md={6} lg={3} xl={3} key={i}>
                  <div className={styles.NetBankingBox}>
                    <Image src={v.img} alt={v.name} />
                    <p className={styles.NetBankingName}>{v.name}</p>
                  </div>
                </Col>
              ))}
              <Col
                xs={12}
                md={12}
                lg={12}
                xl={12}
                className={styles.BankSelector}
              >
                <p className={styles.BankNameTitle}>Bank Name</p>
                <select className={styles.BankDropdown}>
                  <option>Select Bank</option>
                </select>
              </Col>
            </Row>
          )}
          {selectedPayment == 4 && (
            <Row className={styles.WalletRow}>
              {mobileView && <b className={styles.MobSubText}>Wallet</b>}
              {[
                {
                  img: "/assets/images/paywallets/pay1.png",
                  name: "PhonePe",
                },
                {
                  img: "/assets/images/paywallets/pay2.png",
                  name: "Airtel Money",
                },
                {
                  img: "/assets/images/paywallets/pay3.png",
                  name: "Amazon Pay",
                },
                {
                  img: "/assets/images/paywallets/pay4.png",
                  name: "Ola Money",
                },
                {
                  img: "/assets/images/paywallets/pay5.png",
                  name: "Mobikwik",
                },
                {
                  img: "/assets/images/paywallets/pay6.png",
                  name: "Paytm",
                },
                {
                  img: "/assets/images/paywallets/pay7.png",
                  name: "Freecharge",
                },
                {
                  img: "/assets/images/paywallets/pay8.png",
                  name: "JioMoney",
                },
              ].map((v, i) => (
                <Col xs={12} md={12} lg={6} xl={6} key={i}>
                  <div
                    className={`${styles.WalletCover} ${
                      selectWallet == i && styles.SelectedWalletCover
                    }`}
                    onClick={() => setSelectWallet(i)}
                  >
                    <Row>
                      <Col
                        xs={8}
                        md={8}
                        lg={8}
                        xl={8}
                        className={styles.WalletRadio}
                      >
                        <div className={styles.WalletImg}>
                          <Image src={v.img} alt="wallet img" />
                        </div>
                        <p className={styles.WalletName}>{v.name}</p>
                      </Col>
                      <Col
                        xs={4}
                        md={4}
                        lg={4}
                        xl={4}
                        className={styles.RadioRight}
                      >
                        {selectWallet == i ? (
                          <BsCheckCircleFill size={25} color="#0E62CB" />
                        ) : (
                          <Image
                            alt="paywallets"
                            src={"/assets/images/paywallets/radioimg.png"}
                          />
                        )}
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
            </Row>
          )}
          {selectedPayment == 5 && (
            <Row className={styles.PaylaterRow}>
              {mobileView && <b className={styles.MobSubText}>Pay Later</b>}
              {[
                { img: "/assets/images/paywallets/simpl.png", name: "Simpl" },
                {
                  img: "/assets/images/paywallets/lazypay.png",
                  name: "LazyPay",
                },
                {
                  img: "/assets/images/bank-icici.png",
                  name: "ICICI Bank PayLater",
                },
              ].map((v, i) => (
                <Col xs={12} md={12} lg={12} xl={12} key={i}>
                  <div className={styles.PaylaterWrraper}>
                    <Row>
                      <Col
                        xs={8}
                        md={8}
                        lg={8}
                        xl={8}
                        className={styles.PaylaterCover}
                      >
                        <div className={styles.PaylaterImgCover}>
                          <Image src={v.img} alt="paylater" />
                        </div>
                        <p className={styles.PaylaterName}>{v.name}</p>
                      </Col>
                      <Col
                        xs={4}
                        md={4}
                        lg={4}
                        xl={4}
                        className={styles.ArrowRight}
                      >
                        <BsChevronRight size={25} color="#0E62CB" />
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Col>
        <Col
          xs={4}
          md={12}
          lg={4}
          xl={4}
          className={styles.PrimaryButtonWrrapers}
        ></Col>
        {selectedPayment == 5 || selectedPayment == null ? null : (
          <Col
            xs={12}
            md={12}
            lg={8}
            xl={8}
            className={styles.PrimaryButtonWrrapers}
          >
            <PrimaryButton
              clickHandler={idgeneration}
              title="Place Request"
              buttonStyle={{
                width: "100%",
                background: "#0E62CB",
                color: "#fff",
              }}
            />
          </Col>
        )}
      </Row>
    </Layout>
  );
}
