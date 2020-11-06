import React from "react";

const ServiceCardSlider = ({min, max, clickHandler, value}) => {
  return (
    <li className="list-group-item py-2">
      <div className="row">
        <form className="m-3 col-11">
          <input
            type="range"
            className="custom-range"
            min={min}
            max={max}
            onChange={clickHandler}
            value={value}
          ></input>
        </form>
      </div>
    </li>
  );
};

export default ServiceCardSlider;
