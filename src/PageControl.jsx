import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementPage, decrementPage } from "./store/pageReduser";

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
      <button type="submit" onClick={nextPage}>
        next page
      </button>
      <button type="submit" onClick={prevPage}>
        prev page
      </button>
    </div>
  );
}
