import React from "react";
import RoverControl from "./RoverControl";
import PaginationControl from "./PaginationControl";
import PageControl from "./PageControl";
import PhotosControl from "./PhotosControl";

export default function App() {
  return (
    <div>
      <RoverControl />
      <PaginationControl />
      <PageControl />
      <PhotosControl />
    </div>
  );
}
