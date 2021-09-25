import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto } from "./API/rovers";
import { addApi } from "./store/photosReduser";

export default function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photosReduser.photos);

  return (
    <div>
      <p>Mars photos</p>

      <button
        type="submit"
        onClick={() => {
          getPhoto("Spirit", 1, 1).then((data) => {
            dispatch(addApi(data.photos));
          });
        }}
      >
        Add customer
      </button>

      <div>
        {photos.length > 0 ? (
          <div>
            {photos.map((photo) => (
              <div key={photo.id}>
                <img src={photo.img_src} alt="" />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p>customers list is empty</p>
          </div>
        )}
      </div>
    </div>
  );
}
