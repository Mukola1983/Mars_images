import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import RoverControl from "./RoverControl";
import SolControl from "./SolControl";
import PageControl from "./PageControl";
import PhotosControl from "./PhotosControl";
import styles from "./App.module.css";
import RoverImages from "./RoverImages";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <Row className={styles.headerBox}>
        <Col lg={8}>
          <Col p={1}>
            <h3>
              Explore Mars with photos <br /> from NASA
            </h3>
            <RoverControl className={styles.rc} />
            <RoverImages />
          </Col>
        </Col>
        <Col lg={4}>
          <SolControl />
          <PageControl />
        </Col>
      </Row>

      <Container className={styles.container}>
        <PhotosControl />
      </Container>
      <div className={styles.footer}>
        <h2>Thanks for your curiosity !</h2>
      </div>
    </div>
  );
}
