import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "../common/Container";
import IssueComponent from "../IssuePage/IssueComponent";
import { Col, Row } from "react-bootstrap";

import { callAddorRemoveCart } from "redux/actions/cartActions/cartActions";

import style from "@/styles/components/personalGadgets/issuepage.module.css";
import styles from "@/styles/components/homeAppliances/HomeApplianceIssues.module.css";
import { useState } from "react";
import KnowMoreModal from "./KnowMoreModal";

function HomeApplianceIssues({ token, quoteaction }) {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const homeAppliancesIssues = useSelector(
    (state) => state.homeAppliancesIssues.data
  );

  const issueData = [
    {
      issue_id: 2,
      issue_title: "BODY HOUSING",
      repair_type: "PICK UP & DROP",
      repair_duration: "4 HOURS",
      warranty_period: "9 MONTHS",
      templates_icon: "20220111134627.svg",
      templates_icon_url:
        "http://206.189.130.120/erip_api/upload/img/20220111134627.svg",
      templates_description:
        '<div class="container">                   <div class="row">                     <div class="col-12">                         <!-- <h4 class="title1 pt-20">Service Issues</h4> -->                         <div class="height_1-300">                             <div class="item-wrap-issue">                               <!-- <div class="col-12"><hr class="mt-0"></div> -->                                 <div class="d-flex item-issue-box">                                     <div class="width-70">                                       <div>                                         <img src="http://206.189.130.120/erip_api/upload/know_more/Lines%20on%20the%20Screen.png" class="img-fluid" alt="">                                       </div>                                     </div>                                     <div class="width-30">                                       <h4 class="problem ng-binding" style="padding-top: 22px;">Lines on the Screen</h4>                                       <p>Caused by a damaged LCD, this can be fixed by a screen replacement.</p>                                     </div>                                 </div>                                                                       <div class="d-flex item-issue-box">                                     <div class="width-70">                                       <div>                                         <img src="http://206.189.130.120/erip_api/upload/know_more/Complete%20Broken%20Screen.png" class="img-fluid" alt="">                                       </div>                                     </div>                                     <div class="width-30">                                       <h4 class="problem ng-binding" style="padding-top: 22px;">Complete Broken Screen</h4>                                       <p>Caused due to a hard fall, your phone will go blank and stop working. </p>                                     </div>                                 </div>                                                                       <div class="d-flex item-issue-box">                                     <div class="width-70">                                       <div>                                         <img src=http://206.189.130.120/erip_api/upload/know_more/Blacked%20Out%20Screen.png class="img-fluid" alt="">                                       </div>                                     </div>                                     <div class="width-30">                                       <h4 class="problem ng-binding" style="padding-top: 22px;">Blacked Out Screen</h4>                                       <p>Happens when your phone has gone through a hard fall and is not turning back on. </p>                                     </div>                                 </div>                                                               </div>                            </div>                         </div>                   </div>                   </div>',
      display_order: "1",
      display_price: "9000",
      discount_percentage: "20",
      discounted_price: "7200",
    },
    {
      issue_id: 1,
      issue_title: "OEM TOUCH AND SCREEN COMBO",
      repair_type: "DOORSTEP",
      repair_duration: "1 HOUR",
      warranty_period: "6 MONTHS",
      templates_icon: "20220111134627.svg",
      templates_icon_url:
        "http://206.189.130.120/erip_api/upload/img/20220111134627.svg",
      templates_description:
        '<div class="container">                   <div class="row">                     <div class="col-12">                         <!-- <h4 class="title1 pt-20">Service Issues</h4> -->                         <div class="height_1-300">                             <div class="item-wrap-issue">                               <!-- <div class="col-12"><hr class="mt-0"></div> -->                                 <div class="d-flex item-issue-box">                                     <div class="width-70">                                       <div>                                         <img src="http://206.189.130.120/erip_api/upload/know_more/Lines%20on%20the%20Screen.png" class="img-fluid" alt="">                                       </div>                                     </div>                                     <div class="width-30">                                       <h4 class="problem ng-binding" style="padding-top: 22px;">Lines on the Screen</h4>                                       <p>New One, this can be fixed by a screen replacement.</p>                                     </div>                                 </div>                                                                       <div class="d-flex item-issue-box">                                     <div class="width-70">                                       <div>                                         <img src="http://206.189.130.120/erip_api/upload/know_more/Complete%20Broken%20Screen.png" class="img-fluid" alt="">                                       </div>                                     </div>                                     <div class="width-30">                                       <h4 class="problem ng-binding" style="padding-top: 22px;">Complete Broken Screen</h4>                                       <p>Caused due to a hard fall, your phone will go blank and stop working. </p>                                     </div>                                 </div>                                                                       <div class="d-flex item-issue-box">                                     <div class="width-70">                                       <div>                                         <img src=http://206.189.130.120/erip_api/upload/know_more/Blacked%20Out%20Screen.png class="img-fluid" alt="">                                       </div>                                     </div>                                     <div class="width-30">                                       <h4 class="problem ng-binding" style="padding-top: 22px;">Blacked Out Screen</h4>                                       <p>Happens when your phone has gone through a hard fall and is not turning back on. </p>                                     </div>                                 </div>                                                               </div>                            </div>                         </div>                   </div>                   </div>',
      display_order: "1",
      display_price: "5000",
      discount_percentage: "10",
      discounted_price: "4500",
    },
  ];

  const handlingModal = (modalIssue) => {
    setModalData(modalIssue);
    setModal(!modal);
  };

  useEffect(() => {}, [homeAppliancesIssues]);

  return (
    <Container userdefinedclass={styles.homeApplianceIssuesContainer}>
      <h4>Select your Repair Services</h4>
      <Row className={style.issuePageRow}>
        {homeAppliancesIssues.map((issues) => {
          return (
            <Col
              key={issues.issue_id}
              xl={4}
              md={6}
              className={style.issueColumn}
            >
              <IssueComponent
                loggedIn={token}
                issueImage={issues.templates_icon_url}
                issueAlt={issues.issue_title}
                issueName={issues.issue_title}
                issueOfferPrice={issues.discounted_price}
                issueOriginalPrice={issues.display_price}
                discountedPercentage={issues.discount_percentage}
                serviceTime={issues.repair_duration}
                warranty={issues.warranty_period}
                serviceType={issues.repair_type}
                modalHandler={() => handlingModal(issues)}
                addToCart={() => {
                  token
                    ? dispatch(
                        callAddorRemoveCart(
                          localStorage.getItem("token"),
                          issues.issue_id
                        )
                      )
                    : quoteaction();
                }}
                buttonName={token ? "Add to cart" : "Get Quote"}
              />
            </Col>
          );
        })}
        <div>
          <KnowMoreModal
            show={modal}
            onHide={() => setModal(!modal)}
            key={modalData.issue_id}
            knowMoreTitle={modalData.issue_title}
            knowMoreHTMLBody={modalData.templates_description}
          />
        </div>
      </Row>
    </Container>
  );
}

export default HomeApplianceIssues;
