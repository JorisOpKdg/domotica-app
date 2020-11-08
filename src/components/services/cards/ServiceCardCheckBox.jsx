import React from "react";

const ServiceCardCheckBox = ({clickHandler, checkedValue}) => {
  return (
    <li className="list-group-item py-4">
      <form className="form-right my-2 my-lg-0 col-12">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            onClick={clickHandler}
            id="curtainSwitch"
            checked={checkedValue}
          />
          <label className="custom-control-label" htmlFor="curtainSwitch">
            Aan/Uit
          </label>
        </div>
      </form>
    </li>
  );
};

export default ServiceCardCheckBox;
