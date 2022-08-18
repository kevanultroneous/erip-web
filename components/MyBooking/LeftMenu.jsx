import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/LeftMenu.module.css";

function LeftMenu({ profileImage, profileName, profileNumber, menus }) {
  return (
    <div className={styles.leftMenuCont}>
      <div>
        <div className={styles.profileDetailsMainCont}>
          <Col xl={10} className={styles.profileDetailsCard}>
            <div className={styles.profileImage}>
              <Image fluid src={profileImage} alt={profileName} />
            </div>
            <div className={styles.profileDetails}>
              <h5>{profileName}</h5>
              <p>{profileNumber}</p>
              <p>add alternative number</p>
              <p>add email</p>
            </div>
          </Col>
        </div>
        <div>
          {menus.map((menu, ind) => {
            return (
              <div key={ind} className={styles.bookingMenuText}>
                <h6>{menu.menuName}</h6>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.profileDetailsLogOut}>
        <h6>Log Out</h6>
      </div>
    </div>
  );
}

export default LeftMenu;
