import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/LeftMenu.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callFetchProfile } from "redux/actions/profileActions/profileActions";
import { useRouter } from "next/router";

function LeftMenu({
  profileImage,
  profileName,
  profileNumber,
  menus,
  alternativenumberaction,
  addemailaction,
  logout,
}) {
  const router = useRouter();

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
              <p
                onClick={alternativenumberaction}
                className={styles.AlternativeButtons}
              >
                add alternative number
              </p>
              <p onClick={addemailaction} className={styles.AlternativeButtons}>
                add email
              </p>
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
        <h6
          onClick={() => {
            localStorage.removeItem("token");
            router.push("/");
          }}
        >
          Log Out
        </h6>
      </div>
    </div>
  );
}

export default LeftMenu;
