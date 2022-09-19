import { Button, Col, DropdownButton, Row } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/Support.module.css";
import { ImPhone } from "react-icons/im";
import Container from "../common/Container";
import PrimaryButton from "../common/PrimaryButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

export default function Support({ backaction }) {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Container userdefinedclass={styles.containermob}>
      <Row>
        <Col xs={4} md={6} lg={6} xl={6}>
          <BiArrowBack className={styles.BackArrow} onClick={backaction} />
        </Col>
        <Col xs={8} md={6} lg={6} xl={6}>
          <h3 className={styles.Heading}>Support</h3>
        </Col>
        <Col xs={6} md={6} lg={6} xl={6}>
          <p className={styles.OrderNum}>Order Number: 0000007</p>
        </Col>
        <Col xs={6} md={6} lg={6} xl={6}>
          <p className={styles.JobComp}>Job completion date: 20-06-22</p>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6} className={styles.ColClass}>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>
              Full name <span className={styles.Mendatory}>*</span>
            </p>
            <input type="text" className={styles.UserInput} />
          </div>
        </Col>
        <Col xs={6} md={3} lg={3} xl={3} className={styles.ColClass}>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>
              Contact number <span className={styles.Mendatory}>*</span>
            </p>
            <input type="number" className={styles.UserInput} />
          </div>
        </Col>
        <Col xs={6} md={3} lg={3} xl={3} className={styles.ColClass}>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>
              Email address <span className={styles.Mendatory}>*</span>
            </p>
            <input type="email" className={styles.UserInput} />
          </div>
        </Col>
        <Col xs={12} md={12} lg={12} xl={12} className={styles.ColClass}>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>Address</p>
            <textarea rows={3} className={styles.AddressInput}></textarea>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6} className={styles.ColClass}>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>Category/ Brand/ Model</p>
            <input type="text" className={styles.UserInput} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6} className={styles.ColClass}>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>Partner Details</p>
            <Row className={styles.PartnerDetailsInp}>
              <Col xs={6} md={6} lg={6} xl={6}>
                <p>Name - Number</p>
              </Col>
              <Col xs={6} md={6} lg={6} xl={6} className={styles.IconWrraper}>
                <ImPhone color="#0E62CB" size={20} />
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={12} md={12} lg={12} xl={12} className={styles.Tabwrapper}>
          <Row>
            <Col
              xs={6}
              md={6}
              lg={6}
              xl={6}
              className={`${styles.Tabs} ${
                selectedTab == 0 && styles.SelectedTabs
              }`}
            >
              <p
                className={`${styles.TabName} ${
                  selectedTab == 0 && styles.SelectedTabname
                }`}
                onClick={() => setSelectedTab(0)}
              >
                Issues
              </p>
            </Col>
            <Col
              xs={6}
              md={6}
              lg={6}
              xl={6}
              className={`${styles.Tabs} ${
                selectedTab == 1 && styles.SelectedTabs
              }`}
            >
              <p
                className={`${styles.TabName} ${
                  selectedTab == 1 && styles.SelectedTabname
                }`}
                onClick={() => setSelectedTab(1)}
              >
                Parts
              </p>
            </Col>
          </Row>
          <Row className={styles.TabResults}>
            <p className={styles.SmallTitle}>
              Please select issues/parts you want support
            </p>
            {selectedTab == 0 ? (
              <Col
                xs={12}
                md={12}
                lg={12}
                xl={12}
                className={styles.SelectionCol}
              >
                {[0, 1, 2].map((v, i) => (
                  <div className={styles.SelectIssue}>
                    <div className={styles.IssueName}>
                      <p>Lorem ipsum albeto clifor</p>
                    </div>
                    <div className={styles.CheckboxWrraper}>
                      <input type={"checkbox"} className={styles.checkboxinp} />
                    </div>
                  </div>
                ))}
              </Col>
            ) : (
              <Col
                xs={12}
                md={12}
                lg={12}
                xl={12}
                className={styles.SelectionCol}
              >
                {[0, 1, 2].map((v, i) => (
                  <div className={styles.SelectIssue}>
                    <div className={styles.IssueName}>
                      <p>Lorem ipsum albeto clifor tab2</p>
                    </div>
                    <div className={styles.CheckboxWrraper}>
                      <input type={"checkbox"} className={styles.checkboxinp} />
                    </div>
                  </div>
                ))}
              </Col>
            )}
          </Row>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6}>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>
              Reason<span className={styles.Mendatory}>*</span>
            </p>
            <select className={styles.DropDown}>
              <option>valid reason 1</option>
              <option>valid reason 2</option>
              <option>valid reason 3</option>
              <option>valid reason 4</option>
              <option>valid reason 5</option>
            </select>
          </div>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>
              Details <span className={styles.Mendatory}>*</span>
            </p>
            <textarea rows={4} className={styles.AddressInput}></textarea>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6} className={styles.SubmitWrraper}>
          <PrimaryButton
            title="Submit"
            buttonStyle={{
              width: "100%",
              background: "#0E62CB",
              color: "#fff",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
