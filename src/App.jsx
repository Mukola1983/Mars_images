import React from "react";
import { Container, Button, Navbar, Row } from "react-bootstrap";
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
      <Container className={styles.header} fluid>
        {/* <h1>Explore Mars with photos from NASA </h1> */}
        <Navbar.Brand href="#home">
          Explore Mars with photos <br /> from NASA
        </Navbar.Brand>
        <Row className={styles.navbar}>
          <RoverControl />
          <RoverImages />
        </Row>
      </Container>
      <Container className={styles.container}>
        <SolControl />
        <PageControl />
        <PhotosControl />
      </Container>
      <Button variant="warning">bootstarap</Button>
    </div>
  );
}
