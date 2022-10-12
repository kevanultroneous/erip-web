import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/LeftMenu.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callFetchProfile } from "redux/actions/profileActions/profileActions";
import { useRouter } from "next/router";
import axios from "axios";

function LeftMenu({
  profileImage,
  profileName,
  profileNumber,
  menus,
  alternativenumberaction,
  addemailaction,
  altnum,
  altemail,
  updatename,
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
              <h5 onClick={updatename} className={styles.AlternativeButtons}>
                {profileName == "0" ? "Erip User" : profileName}
              </h5>
              <p
                onClick={alternativenumberaction}
                className={styles.AlternativeButtons}
              >
                {profileNumber ? profileNumber : "add alternative number"}
              </p>
              {/* <p
                onClick={alternativenumberaction}
                className={styles.AlternativeButtons}
              >
                {altnum ? altnum : }
              </p> */}
              <p onClick={addemailaction} className={styles.AlternativeButtons}>
                {altemail ? altemail : "add email"}
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
        <p
          onClick={() => {
            axios
              .get(`http://43.204.87.153/api/v1/users/logout`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
              .then((response) => {
                if (response.data.success) {
                  localStorage.removeItem("token");
                  router.push("/");
                } else {
                  alert(response.data.message);
                }
              })
              .catch((e) => {
                alert(e);
              });
          }}
        >
          Log Out
        </p>
      </div>
    </div>
  );
}

export default LeftMenu;
