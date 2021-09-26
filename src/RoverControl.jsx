import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Radio,
  FormControl,
  Typography,
  RadioGroup,
  FormControlLabel
} from "@mui/material";
import { changeRover } from "./store/roverReduser";

export default function RoverControl() {
  const dispatch = useDispatch();
  const rover = useSelector((state) => state.roverReduser.rover);

  const changeRoverName = (e) => {
    dispatch(changeRover(e.target.value));
  };
  return (
    <FormControl>
      <Typography variant="h5" sx={{ color: "#00008B" }}>
        Choose your Rover
      </Typography>
      <RadioGroup value={rover} onChange={changeRoverName}>
        <FormControlLabel
          value="Curiosity"
          control={<Radio />}
          label="Curiosity"
          sx={{ color: "#00008B" }}
        />
        <FormControlLabel
          value="Opportunity"
          control={<Radio />}
          label="Opportunity"
          sx={{ color: "#00008B" }}
        />
        <FormControlLabel
          value="Spirit"
          control={<Radio />}
          label="Spirit"
          sx={{ color: "#00008B" }}
        />
      </RadioGroup>
    </FormControl>
  );
}
