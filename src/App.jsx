import React from "react";
import RoverControl from "./RoverControl";
import SolControl from "./SolControl";
import PageControl from "./PageControl";
import PhotosControl from "./PhotosControl";
import styles from "./App.module.css";
import RoverImages from "./RoverImages";

export default function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Explore Mars with photos from NASA </h1>
        <div className={styles.navbar}>
          <RoverControl />
          <RoverImages />
        </div>
      </div>
      <div className={styles.container}>
        <SolControl />
        <PageControl />
        <PhotosControl />
      </div>
    </div>
  );
}
