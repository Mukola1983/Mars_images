import React from "react";
import RoverControl from "./RoverControl";
import SolControl from "./SolControl";
import PageControl from "./PageControl";
import PhotosControl from "./PhotosControl";

export default function App() {
  return (
    <div>
      <RoverControl />
      <SolControl />
      <PageControl />
      <PhotosControl />
    </div>
  );
}
