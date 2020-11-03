import React from "react";

const ServiceCardLiMuSlider = (props) => {
  return (
    <li className="list-group-item py-2">
      <div className="row">
        <form className="m-3 col-11">
          <input
            type="range"
            className="custom-range"
            min={props.min}
            max={props.max}
            onChange={props.valueHandler}
            value={props.room.lighting}
          ></input>
        </form>
      </div>
    </li>
  );
};

export default ServiceCardLiMuSlider;
