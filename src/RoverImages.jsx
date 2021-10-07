import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Image } from "react-bootstrap";
import styles from "./RoverImages.module.css";
import Utils from "./API/Utils";

export default function RoverImages() {
  const curiosity = useSelector((state) => state.roverReduser.curiosity);
  const spirit = useSelector((state) => state.roverReduser.spirit);
  const opportynity = useSelector((state) => state.roverReduser.opportynity);

  const [roverImage, setRoverImage] = useState(Utils.curiosity);

  useEffect(() => {
    if (curiosity) {
      setRoverImage(Utils.curiosity);
    }
    if (spirit) {
      setRoverImage(Utils.spirit);
    }
    if (opportynity) {
      setRoverImage(Utils.opportynity);
    }
  });

  return (
    <div>
      <Col lg={4} md={5} sm={6} xs={12} className={styles.blackBox}>
        {/* <div className={styles.curtan} /> */}
        <Image src={roverImage} alt="" fluid />
      </Col>
    </div>
  );
}
