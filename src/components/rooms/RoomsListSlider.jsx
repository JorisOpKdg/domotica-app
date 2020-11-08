import React from "react";
import RangeSlider from "react-bootstrap-range-slider";

const RoomsListSlider = ({fontSize, title, value, changeHandler, min, max}) => {
  return (
    <div className="row m-2">
      <h4
        className="col-3"
        style={{ fontSize: `${fontSize}px` }}
      >{title}</h4>
      <form className="col-9">
        <RangeSlider
          value={value}
          min={min}
          max={max}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default RoomsListSlider;
