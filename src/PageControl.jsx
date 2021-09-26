import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { incrementPage, decrementPage } from "./store/pageReduser";
import styles from "./PageControl.module.css";

export default function PageControl() {
  const dispatch = useDispatch();
  const curentPage = useSelector((state) => state.pageReduser.curentPage);

  const nextPage = () => {
    dispatch(incrementPage());
  };
  const prevPage = () => {
    if (curentPage > 1) {
      dispatch(decrementPage());
    }
  };
  return (
    <div>
      <h3>page: {curentPage}</h3>
      <div className={styles.buttonBox}>
        <Button
          variant="contained"
          size="small"
          type="submit"
          onClick={prevPage}
        >
          <ArrowBackIosNewIcon />
        </Button>
        <Button
          sx={{ m: 2 }}
          variant="contained"
          size="small"
          type="submit"
          onClick={nextPage}
        >
          <ArrowForwardIosIcon />
        </Button>
      </div>
    </div>
  );
}
