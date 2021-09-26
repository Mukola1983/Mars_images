import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Typography, Pagination } from "@mui/material";
import { changeCurentSol, changeMaxSol } from "./store/solReduser";
import { updatePage } from "./store/pageReduser";

export default function SolControl() {
  const dispatch = useDispatch();
  const maxSol = useSelector((state) => state.solReduser.maxSol);
  const curentSol = useSelector((state) => state.solReduser.curentSol);
  const rover = useSelector((state) => state.roverReduser.rover);

  const changeSol = (e, value) => {
    dispatch(changeCurentSol(value));
    dispatch(updatePage());
  };

  useEffect(() => {
    if (rover === "Curiosity") {
      dispatch(changeMaxSol(3213));
    }
    if (rover === "Spirit") {
      dispatch(changeMaxSol(2208));
    }
    if (rover === "Opportunity") {
      dispatch(changeMaxSol(5111));
    }
  }, [rover]);

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Sol: {}</Typography>
      <Pagination
        color="primary"
        count={maxSol}
        page={curentSol}
        onChange={changeSol}
      />
    </Stack>
  );
}
