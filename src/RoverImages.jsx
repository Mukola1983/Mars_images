import React from "react";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import styles from "./RoverImages.module.css";
import Utils from "./API/Utils";

export default function RoverImages() {
  const curiosity = useSelector((state) => state.roverReduser.curiosity);
  const spirit = useSelector((state) => state.roverReduser.spirit);
  const opportynity = useSelector((state) => state.roverReduser.opportynity);

  return (
    <>
      <Image
        src={Utils.curiosity}
        alt=""
        className={
          curiosity ? `${styles.image} ${styles.active}` : `${styles.image} `
        }
      />
      <Image
        src={Utils.spirit}
        alt=""
        className={
          spirit ? `${styles.image} ${styles.active}` : `${styles.image} `
        }
      />
      <Image
        src={Utils.opportynity}
        alt=""
        className={
          opportynity ? `${styles.image} ${styles.active}` : `${styles.image} `
        }
      />
    </>
  );
}
