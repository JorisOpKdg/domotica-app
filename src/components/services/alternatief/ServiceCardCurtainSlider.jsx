import React from "react";

const ServiceCardCurtainSlider = (props) => {
  return (
    <li className="list-group-item py-4">
      <form className="form-right my-2 my-lg-0 col-12">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="curtainSwitch"
            onClick={props.valueHandler}
            value={props.room.curtains}
          />
          <label className="custom-control-label" for="curtainSwitch">
            Aan/Uit
          </label>
        </div>
      </form>
    </li>
  );
};

export default ServiceCardCurtainSlider;
