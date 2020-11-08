import React from "react";
import RangeSlider from "react-bootstrap-range-slider";

const RoomsListSlider = ({fontSize, title, value, changeHandler, min, max}) => {
  return (
    <div className="row">
      <h4
        className="col-2"
        style={{ fontSize: `${fontSize}px` }}
      >{title}</h4>
      <form className="col-10">
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
