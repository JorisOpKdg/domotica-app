import React from "react";
import RangeSlider from "react-bootstrap-range-slider";

const ServiceCardSlider = ({ min, max, changeHandler, afterChangeHandler, value }) => {
  return (
    <li className="list-group-item py-2">
      <div className="row">
        <form className="m-3 col-11">
          <RangeSlider
            value={value}
            min={min}
            max={max}
            onChange={changeHandler}
            onAfterChange={afterChangeHandler}
          />
        </form>
      </div>
    </li>
  );
};

export default ServiceCardSlider;
