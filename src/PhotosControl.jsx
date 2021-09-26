import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addApi } from "./store/photosReduser";
import { getPhoto } from "./API/rovers";
import styles from "./PhotosControl.module.css";

export default function PhotosControl() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photosReduser.photos);
  const rover = useSelector((state) => state.roverReduser.rover);
  const curentSol = useSelector((state) => state.solReduser.curentSol);
  const curentPage = useSelector((state) => state.pageReduser.curentPage);

  useEffect(() => {
    getPhoto(rover, curentPage, curentSol).then((data) => {
      dispatch(addApi(data.photos));
    });
  }, [rover, curentPage, curentSol]);
  return (
    <div>
      {photos.length > 0 ? (
        <div className={styles.box}>
          {photos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.img_src} alt="" className={styles.image} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>Photos list is empty!</h2>
        </div>
      )}
    </div>
  );
}
