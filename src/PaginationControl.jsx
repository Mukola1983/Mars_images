import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Typography, Pagination } from "@mui/material";
import { changeCurentSol } from "./store/solReduser";

export default function PaginationControl() {
  const dispatch = useDispatch();
  const maxSol = useSelector((state) => state.solReduser.maxSol);
  const curentSol = useSelector((state) => state.solReduser.curentSol);

  const changeSol = (e, value) => {
    dispatch(changeCurentSol(value));
  };

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
